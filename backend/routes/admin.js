const express = require('express');
const router = express.Router();
const Lead = require('../models/Lead');
const auth = require('../middleware/auth');

// Get all leads
router.get('/leads', auth, async (req, res) => {
  try {
    const { status, search, page = 1, limit = 20 } = req.query;
    const query = {};
    
    if (status && status !== 'all') query.status = status;
    if (search) {
      query.$or = [
        { naam: { $regex: search, $options: 'i' } },
        { mobile: { $regex: search, $options: 'i' } },
        { sheher: { $regex: search, $options: 'i' } }
      ];
    }
    
    const total = await Lead.countDocuments(query);
    const leads = await Lead.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));
    
    res.json({ leads, total, pages: Math.ceil(total / limit) });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update lead status
router.put('/leads/:id', auth, async (req, res) => {
  try {
    const { status, notes } = req.body;
    const lead = await Lead.findByIdAndUpdate(
      req.params.id,
      { status, notes },
      { new: true }
    );
    res.json(lead);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete lead
router.delete('/leads/:id', auth, async (req, res) => {
  try {
    await Lead.findByIdAndDelete(req.params.id);
    res.json({ message: 'Lead deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Dashboard stats
router.get('/stats', auth, async (req, res) => {
  try {
    const total = await Lead.countDocuments();
    const naya = await Lead.countDocuments({ status: 'naya' });
    const convert = await Lead.countDocuments({ status: 'convert' });
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayLeads = await Lead.countDocuments({ createdAt: { $gte: today } });
    
    const cityStats = await Lead.aggregate([
      { $group: { _id: '$sheher', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 5 }
    ]);
    
    res.json({ total, naya, convert, todayLeads, cityStats });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const Lead = require('../models/Lead');

// Submit lead (public)
router.post('/', async (req, res) => {
  try {
    const { naam, mobile, sheher, zaroorat, sandesh } = req.body;
    
    if (!naam || !mobile || !sheher) {
      return res.status(400).json({ message: 'Naam, mobile aur sheher zaroori hai' });
    }
    
    if (!/^[6-9]\d{9}$/.test(mobile)) {
      return res.status(400).json({ message: 'Valid 10 digit mobile number daalo' });
    }
    
    const lead = new Lead({ naam, mobile, sheher, zaroorat, sandesh });
    await lead.save();
    
    res.status(201).json({ 
      success: true, 
      message: 'Aapka request mil gaya! Jald hi sampark karenge.' 
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;

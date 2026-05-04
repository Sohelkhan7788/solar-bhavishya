# 🌞 Solar Bhavishya — MERN Stack Website

**Solar Bhavishya** — Poore Rajasthan mein Rooftop Solar System. Nasir Khan ke liye banaya gaya full-stack website with Admin Panel.

---

## 📁 Project Structure

```
solar-bhavishya/
├── backend/          # Node.js + Express + MongoDB
│   ├── models/       # Lead.js, Admin.js
│   ├── routes/       # leads.js, auth.js, admin.js
│   ├── middleware/   # auth.js (JWT)
│   ├── server.js
│   └── .env.example
└── frontend/         # React.js
    ├── src/
    │   ├── components/  # Navbar, Hero, Sections, etc.
    │   ├── pages/       # Home, AdminLogin, AdminDashboard
    │   └── context/     # AuthContext
    └── public/
```

---

## 🚀 Setup & Run Karna

### Prerequisites
- Node.js v16+
- MongoDB (local ya MongoDB Atlas)
- npm / yarn

---

### Step 1: Backend Setup

```bash
cd backend
cp .env.example .env
# .env mein apna MongoDB URI daalo
npm install
node server.js
```

Backend `http://localhost:5000` par run karega.

---

### Step 2: Admin Account Banana

Pehli baar chalane par ye API call karein:
```
POST http://localhost:5000/api/auth/setup
```

Ya browser mein open karein: `http://localhost:5000/api/auth/setup`

**Default Credentials:**
- Username: `nasirkhan`
- Password: `Solar@2024`

---

### Step 3: Frontend Setup

```bash
cd frontend
npm install
npm start
```

Website `http://localhost:3000` par open hogi.

---

## 🌐 Pages

| Page | URL | Description |
|------|-----|-------------|
| Main Website | `/` | Solar Bhavishya landing page |
| Admin Login | `/admin/login` | Admin login |
| Admin Dashboard | `/admin` | Leads management |

---

## ✨ Features

### Website (Frontend)
- ✅ Fully responsive (mobile + desktop)
- ✅ Dark theme with gold accents
- ✅ Hero section with animated sun
- ✅ Benefits (Fayde) section
- ✅ Government Subsidy info
- ✅ 5-step Process (Prakriya)
- ✅ Why Choose Us section
- ✅ Rajasthan city coverage
- ✅ Contact form with validation
- ✅ Floating call button
- ✅ Smooth scroll navigation

### Admin Panel
- ✅ JWT-based secure login
- ✅ Dashboard with stats (total, today, convert)
- ✅ Top cities bar chart
- ✅ Lead management table
- ✅ Search & filter by status
- ✅ Pagination
- ✅ Lead detail modal
- ✅ Status update (Naya → Contact Kiya → Follow Up → Convert → Band)
- ✅ Notes add karna
- ✅ Direct call & WhatsApp buttons
- ✅ Delete lead

---

## 🔧 Environment Variables (Backend .env)

```env
MONGODB_URI=mongodb://localhost:27017/solar-bhavishya
JWT_SECRET=your_secret_key_here
PORT=5000
FRONTEND_URL=http://localhost:3000
```

---

## 🚢 Production Deployment

### Backend (Railway / Render / VPS)
```bash
cd backend
npm install
npm start
```

### Frontend (Vercel / Netlify)
```bash
cd frontend
npm run build
# build/ folder ko deploy karein
```

**Note:** Production mein `package.json` ka `proxy` field remove karein aur axios calls mein full backend URL daalen.

---

## 📞 Contact
**Nasir Khan** — Solar Energy Expert, Rajasthan  
📱 8769465759 | सोमवार–रविवार 9AM–8PM

---

*Built with ❤️ for Solar Bhavishya*

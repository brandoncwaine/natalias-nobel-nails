# Quick Reference Card

## 🚀 Essential Commands

```bash
# Development
npm run dev              # Start local server (localhost:5173)

# Production
npm run build            # Build for production
npm run deploy           # Deploy to GitHub Pages

# Git
git add .                # Stage all changes
git commit -m "message"  # Commit changes
git push                 # Push to GitHub
```

## 🔑 Important URLs

**Local Development:**

- Website: http://localhost:5173
- Admin: http://localhost:5173/admin

**Production (after deployment):**

- Website: https://YOUR_USERNAME.github.io/natalias-nobel-nails/
- Admin: https://YOUR_USERNAME.github.io/natalias-nobel-nails/admin

**Firebase Console:**

- https://console.firebase.google.com/
- Project: natalias-nobel-nails

## 📁 Key Files to Customize

| File                               | What to Change                         |
| ---------------------------------- | -------------------------------------- |
| `src/firebase.js`                  | Firebase configuration (already done!) |
| `src/components/Home.jsx`          | Contact info, address, hours           |
| `src/components/BookingSystem.jsx` | Services, prices, time slots           |
| `vite.config.js`                   | Repository name (base path)            |
| `src/App.jsx`                      | Repository name (basename)             |
| All `.css` files                   | Colors (search for #c4698f)            |

## 🎨 Design Colors

- **Primary Pink:** `#c4698f`
- **Light Pink:** `#e8c7d8`
- **Background:** `#f9f4f7`
- **Success Green:** `#28a745`
- **Warning Yellow:** `#ffc107`
- **Error Red:** `#dc3545`

## ⏰ Time Slots Configuration

Default: 9:00 AM - 6:00 PM, every 30 minutes

Edit in: `src/components/BookingSystem.jsx`

```javascript
const TIME_SLOTS = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
];
```

## 💅 Services Configuration

Edit in: `src/components/BookingSystem.jsx`

```javascript
const SERVICES = [
  { id: "manicure", name: "Classic Manicure", duration: 30, price: 25 },
  // Add or modify services here
];
```

## 🔐 Firebase Admin Login

**Default credentials:** Set these when you create admin user in Firebase

To create admin:

1. Go to Firebase Console
2. Authentication > Users
3. Add User
4. Save email/password

## 🔧 Firestore Collections

**Collection Name:** `bookings`

**Document Structure:**

```javascript
{
  date: "2026-02-15",
  time: "10:00",
  service: "Gel Manicure",
  serviceId: "gel-manicure",
  duration: 60,
  price: 40,
  customerName: "Jane Doe",
  customerEmail: "jane@example.com",
  customerPhone: "(555) 123-4567",
  status: "pending", // or "confirmed", "cancelled", "completed"
  createdAt: Timestamp
}
```

## 📱 Testing Checklist

**Quick Test (2 minutes):**

1. ✅ Homepage loads
2. ✅ Can select date
3. ✅ Can book appointment
4. ✅ Can login to admin
5. ✅ Booking appears in admin

## 🆘 Common Issues & Fixes

| Problem             | Solution                              |
| ------------------- | ------------------------------------- |
| Build fails         | Check firebase.js exports are correct |
| Admin can't login   | Verify admin user exists in Firebase  |
| Bookings don't save | Check Firestore rules allow writes    |
| 404 on GitHub Pages | Verify gh-pages branch and settings   |
| Styling broken      | Check base path in vite.config.js     |
| Can't deploy        | Run `npm install gh-pages`            |

## 📞 Support Resources

- **Full Documentation:** README.md
- **Deployment Guide:** DEPLOYMENT_GUIDE.md
- **Firebase Setup:** FIREBASE_SETUP.md
- **Launch Checklist:** CHECKLIST.md
- **Project Summary:** PROJECT_SUMMARY.md

## 🎯 After Making Changes

```bash
# Save changes locally
git add .
git commit -m "Description of changes"
git push

# Deploy updated version
npm run deploy
```

Wait 1-2 minutes for changes to appear on live site.

## 💡 Pro Tips

1. **Test locally first** before deploying
2. **Check admin dashboard daily** for new bookings
3. **Backup Firebase data** periodically
4. **Use browser console** (F12) to debug issues
5. **Keep Firebase credentials secure**
6. **Mobile test** on real devices

## 📊 Admin Dashboard Features

- View all bookings
- Filter by status (All, Pending, Confirmed, Cancelled)
- Confirm pending bookings
- Cancel bookings
- Mark as completed
- Delete bookings
- See statistics (total, pending, confirmed, cancelled)

## 🔄 Update Workflow

1. Make changes to code
2. Test with `npm run dev`
3. If looks good, commit and push
4. Run `npm run deploy`
5. Check live site in 2 minutes

---

**Keep this card handy for quick reference!**

# Pre-Launch Checklist

Use this checklist before deploying your website to ensure everything is set up correctly.

## ✅ Firebase Setup

- [ ] Firebase project created: "natalias-nobel-nails"
- [ ] Firestore Database enabled
- [ ] Firestore security rules added and published
- [ ] Email/Password authentication enabled
- [ ] Admin user created in Authentication
- [ ] Admin credentials saved securely
- [ ] Firebase config verified in `src/firebase.js`

## ✅ Local Testing

- [ ] `npm install` completed successfully
- [ ] `npm run dev` starts without errors
- [ ] Website loads at http://localhost:5173
- [ ] Homepage displays correctly
- [ ] Services section shows all 9 services
- [ ] Calendar opens and dates can be selected
- [ ] Time slots display correctly
- [ ] Booking form accepts all information
- [ ] Test booking submits successfully
- [ ] Admin page loads at /admin route
- [ ] Admin login works with credentials
- [ ] Test booking appears in admin dashboard
- [ ] Booking status can be changed
- [ ] Booking can be deleted
- [ ] Logout works correctly
- [ ] Mobile view looks good (use browser dev tools)

## ✅ Customization (Optional)

- [ ] Updated contact information in `Home.jsx`
- [ ] Changed services/prices if needed in `BookingSystem.jsx`
- [ ] Modified time slots if needed
- [ ] Updated business hours
- [ ] Changed colors (optional)
- [ ] Replaced business name (optional)

## ✅ GitHub Setup

- [ ] GitHub repository created
- [ ] Repository name: `natalias-nobel-nails` (or your chosen name)
- [ ] Repository is public (required for free GitHub Pages)
- [ ] Git initialized locally (`git init`)
- [ ] Files committed (`git add .` and `git commit`)
- [ ] Remote added (`git remote add origin ...`)
- [ ] Code pushed to GitHub (`git push -u origin main`)

## ✅ Deployment Configuration

- [ ] `vite.config.js` base matches repository name
- [ ] `basename` in App.jsx matches repository name
- [ ] `gh-pages` package installed
- [ ] `npm run build` completes successfully
- [ ] No errors in build output

## ✅ GitHub Pages Deployment

- [ ] `npm run deploy` executed successfully
- [ ] `gh-pages` branch created in GitHub
- [ ] GitHub Pages enabled in repository settings
- [ ] Source set to `gh-pages` branch
- [ ] Waited 2-3 minutes for deployment
- [ ] Website accessible at GitHub Pages URL
- [ ] Homepage loads correctly online
- [ ] Navigation works
- [ ] Booking system works
- [ ] Admin login works
- [ ] Test booking from live site

## ✅ Production Testing

After deployment, test these on the live site:

- [ ] Create a real booking
- [ ] Check booking appears in admin panel
- [ ] Confirm the booking
- [ ] Test on mobile device (real phone)
- [ ] Test on different browsers (Chrome, Safari, Firefox)
- [ ] Share link with a friend to test

## ✅ Firebase Security (Important!)

- [ ] Firestore rules prevent unauthorized writes to admin fields
- [ ] Firestore rules allow public booking creation
- [ ] Firestore rules require auth for reading all bookings
- [ ] Domain restrictions added in Firebase Console (optional but recommended)

## 🎯 Post-Launch

- [ ] Bookmark the live website URL
- [ ] Save admin login credentials in password manager
- [ ] Add website link to social media profiles
- [ ] Test receiving bookings from real customers
- [ ] Check admin dashboard daily for new bookings
- [ ] Respond to and confirm bookings promptly

## 🚨 Troubleshooting

If something doesn't work:

1. **Check browser console** (F12) for error messages
2. **Verify Firebase config** is correct
3. **Check Firestore rules** are published
4. **Ensure admin user exists** in Firebase Authentication
5. **Verify repository name** matches in vite.config.js and App.jsx
6. **Clear browser cache** and hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
7. **Review DEPLOYMENT_GUIDE.md** for detailed steps

## 📝 Notes

- Keep your Firebase admin credentials secure
- Regularly check bookings in the admin panel
- Consider setting up email notifications (future enhancement)
- Back up important bookings data periodically from Firestore

## ✨ Ready to Launch!

Once all items are checked, your nail salon website is ready for customers!

---

**Need help?** Review the README.md or DEPLOYMENT_GUIDE.md for detailed instructions.

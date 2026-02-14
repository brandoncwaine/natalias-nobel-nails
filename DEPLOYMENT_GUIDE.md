# Quick Start Deployment Guide

## 🚀 Getting Your Nail Salon Website Live

Follow these steps to get your website up and running:

## Step 1: Firebase Configuration (15 minutes)

### Create Firebase Project

1. Visit https://console.firebase.google.com/
2. Click "Add Project"
3. Name it "natalias-nobel-nails"
4. Disable Google Analytics (optional)
5. Click "Create Project"

### Enable Firestore

1. In your Firebase project, click "Firestore Database"
2. Click "Create Database"
3. Choose "Start in production mode"
4. Select a location close to your customers
5. Click "Enable"

### Setup Firestore Rules

1. Go to Firestore Database > Rules
2. Replace the rules with:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /bookings/{booking} {
      allow read: if request.auth != null;
      allow create: if true;
      allow update, delete: if request.auth != null;
    }
  }
}
```

3. Click "Publish"

### Enable Authentication

1. Click "Authentication" in sidebar
2. Click "Get Started"
3. Click "Email/Password"
4. Enable it and click "Save"

### Create Admin Account

1. Stay in Authentication
2. Click "Add User"
3. Enter email: `admin@nataliasnobelnails.com` (or your preferred email)
4. Enter a strong password
5. Click "Add User"
6. **SAVE THESE CREDENTIALS** - you'll need them to login!

### Get Firebase Config

1. Click the gear icon ⚙️ next to "Project Overview"
2. Click "Project Settings"
3. Scroll down to "Your apps"
4. Click the web icon `</>`
5. Name it "Natalia's Nobel Nails Web"
6. Click "Register app"
7. Copy the `firebaseConfig` object

### Update Your Code

1. Open `src/firebase.js` in your code editor
2. Replace the placeholder values with your Firebase config:

```javascript
const firebaseConfig = {
  apiKey: "PASTE_YOUR_API_KEY",
  authDomain: "PASTE_YOUR_AUTH_DOMAIN",
  projectId: "PASTE_YOUR_PROJECT_ID",
  storageBucket: "PASTE_YOUR_STORAGE_BUCKET",
  messagingSenderId: "PASTE_YOUR_SENDER_ID",
  appId: "PASTE_YOUR_APP_ID",
};
```

## Step 2: Local Testing (5 minutes)

```bash
# Make sure you're in the project directory
cd natalias-nobel-nails

# Start the development server
npm run dev
```

Open http://localhost:5173 in your browser.

### Test the Site:

1. ✅ Homepage loads
2. ✅ Click through services
3. ✅ Try booking an appointment
4. ✅ Navigate to `/admin` and login with your admin credentials
5. ✅ Check that your test booking appears in admin dashboard

## Step 3: GitHub Repository (5 minutes)

### Create Repository on GitHub

1. Go to https://github.com/new
2. Repository name: `natalias-nobel-nails`
3. Choose "Public"
4. **Don't** initialize with README (we already have one)
5. Click "Create repository"

### Push Your Code

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Natalia's Nobel Nails website"

# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/natalias-nobel-nails.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 4: Deploy to GitHub Pages (5 minutes)

### Update Base URL

1. Open `vite.config.js`
2. Make sure the base matches your repository name:

```javascript
base: '/natalias-nobel-nails/',
```

### Deploy

```bash
npm run deploy
```

This will:

- Build your production site
- Create a `gh-pages` branch
- Push the built files to GitHub

### Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings"
3. Click "Pages" in the left sidebar
4. Under "Source", select `gh-pages` branch
5. Click "Save"

Wait 1-2 minutes, then visit:

```
https://YOUR_USERNAME.github.io/natalias-nobel-nails/
```

## 🎉 You're Live!

Your website is now live and ready to accept bookings!

## Step 5: Customize Your Site

### Update Contact Information

Edit `src/components/Home.jsx`:

- Search for "123 Beauty Lane" and replace with your address
- Update phone number
- Update email
- Update business hours

### Change Colors (Optional)

Search all `.css` files for `#c4698f` and replace with your brand color.

### Modify Services & Prices

Edit `src/components/BookingSystem.jsx` and update the `SERVICES` array.

After any changes:

```bash
git add .
git commit -m "Updated contact info and services"
git push
npm run deploy
```

## Common Issues & Solutions

### "Permission denied" when deploying

- Make sure you're logged into GitHub in your terminal
- Check repository is public or you have GitHub Pro

### Firebase errors on the site

- Double-check your Firebase config in `src/firebase.js`
- Verify Firestore rules are published
- Check browser console for specific error messages

### Bookings not showing in admin

- Make sure you're logged in with the correct admin credentials
- Check Firestore database directly to see if data is being saved
- Open browser console for errors

### 404 error on GitHub Pages

- Verify gh-pages branch exists
- Check GitHub Pages settings are pointing to gh-pages branch
- Wait a few minutes for changes to propagate

## Need Help?

- Check the main README.md for detailed documentation
- Open the browser console (F12) to see error messages
- Check Firebase Console logs
- Verify all setup steps were completed

## Updating Your Site

Whenever you make changes:

```bash
# Save your changes
git add .
git commit -m "Description of changes"
git push

# Deploy updated version
npm run deploy
```

---

**Congratulations! Your nail salon website is now live! 💅✨**

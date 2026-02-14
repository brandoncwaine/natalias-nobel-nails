# Firebase Environment Setup

This file contains instructions for setting up your Firebase environment variables securely.

## Why Environment Variables?

For better security in production, you can store your Firebase configuration in environment variables instead of hardcoding them in `src/firebase.js`.

## Optional: Using Environment Variables (Advanced)

### 1. Create `.env` file

In the root of your project, create a `.env` file:

```env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### 2. Update `src/firebase.js`

Replace the hardcoded config with:

```javascript
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};
```

### 3. GitHub Pages Deployment

For GitHub Pages, you'll need to use GitHub Secrets:

1. Go to your repository settings
2. Click on "Secrets and variables" → "Actions"
3. Add each Firebase config value as a secret

However, **note**: GitHub Pages with environment variables requires GitHub Actions workflow, which is more complex.

## Recommendation

For a simple nail salon website, **hardcoding Firebase config in `src/firebase.js` is fine** because:

- Firebase API keys are meant to be public (they're in client-side code anyway)
- Firebase security is handled by Firestore rules, not by hiding the config
- It's simpler to deploy and maintain

The `.env` approach is only necessary if you're managing multiple environments (dev, staging, production) with different Firebase projects.

## Security Best Practices

Your Firebase project is secured by:

1. **Firestore Security Rules** - Control who can read/write data
2. **Authentication** - Admin panel requires login
3. **Domain Restrictions** - You can restrict API keys to specific domains in Firebase Console

To add domain restrictions:

1. Go to Firebase Console
2. Click Settings → Project Settings
3. Scroll to "API restrictions"
4. Add your GitHub Pages domain

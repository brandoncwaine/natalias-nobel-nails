# Natalia's Nobel Nails - Nail Salon Booking Website# React + Vite

A beautiful, fully-functional nail salon website with appointment booking system and admin dashboard. Built with React, Firebase, and deployable to GitHub Pages.This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## FeaturesCurrently, two official plugins are available:

- 🎨 Beautiful, responsive design with nail salon branding- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh

- 📅 Interactive calendar booking system- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- ⏰ Time slot management with availability checking

- 💅 Multiple nail service options (Manicure, Pedicure, Gel, Acrylic, etc.)## React Compiler

- 👤 Customer information collection

- 🔐 Secure admin panel with Firebase AuthenticationThe React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

- 📊 Admin dashboard to manage bookings

- ✅ Booking status management (Pending, Confirmed, Cancelled, Completed)## Expanding the ESLint configuration

- 📱 Mobile-responsive design

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Tech Stack

- **Frontend**: React + Vite
- **Backend**: Firebase (Firestore + Authentication)
- **Routing**: React Router
- **Calendar**: react-calendar
- **Date Handling**: date-fns
- **Hosting**: GitHub Pages

## Prerequisites

Before you begin, ensure you have:

- Node.js (v18 or higher)
- npm or yarn
- A Firebase account
- A GitHub account (for deployment)

## Setup Instructions

### 1. Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or use an existing one
3. Enable **Firestore Database**:
   - Go to Firestore Database in the Firebase Console
   - Create database in production mode
   - Choose your preferred location
4. Enable **Authentication**:
   - Go to Authentication in the Firebase Console
   - Click "Get Started"
   - Enable "Email/Password" authentication
   - Add your admin user manually through the Authentication tab
5. Get your Firebase configuration:
   - Go to Project Settings (gear icon)
   - Scroll down to "Your apps"
   - Click the web icon (</>)
   - Copy the configuration object

6. Update `src/firebase.js`:
   ```javascript
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_PROJECT_ID.appspot.com",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID",
   };
   ```

### 2. Firestore Security Rules

Add these security rules in Firestore:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read access to bookings for authenticated users (admin)
    match /bookings/{booking} {
      allow read: if request.auth != null;
      allow write: if true; // Allow anyone to create bookings
      allow update, delete: if request.auth != null; // Only admin can update/delete
    }
  }
}
```

### 3. Create Admin User

1. Go to Firebase Console > Authentication
2. Click "Add User"
3. Add email and password for admin access
4. Save the credentials

### 4. Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Visit `http://localhost:5173` to see the site.

### 5. GitHub Pages Deployment

#### First Time Setup:

1. Create a new GitHub repository named `natalias-nobel-nails`

2. Initialize git and push your code:

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/natalias-nobel-nails.git
   git push -u origin main
   ```

3. Update `vite.config.js` with your repository name:

   ```javascript
   base: '/YOUR_REPOSITORY_NAME/',
   ```

4. Deploy to GitHub Pages:

   ```bash
   npm run deploy
   ```

5. Enable GitHub Pages:
   - Go to your repository settings
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select the `gh-pages` branch
   - Save

Your site will be available at: `https://YOUR_USERNAME.github.io/natalias-nobel-nails/`

#### Subsequent Deployments:

```bash
npm run deploy
```

## Usage

### Customer Booking Flow:

1. Visit the website
2. Click "Book Now" or scroll to booking section
3. Select a date from the calendar
4. Choose a service from the dropdown
5. Select an available time slot
6. Fill in contact information (Name, Email, Phone)
7. Click "Book Appointment"

### Admin Flow:

1. Navigate to `/admin` route or click "Admin" in navigation
2. Login with your Firebase admin credentials
3. View all bookings in the dashboard
4. Filter bookings by status (All, Pending, Confirmed, Cancelled)
5. Update booking status:
   - **Confirm** pending bookings
   - **Cancel** bookings
   - Mark as **Completed** when service is done
   - **Delete** bookings if needed

## Customization

### Changing Colors:

The main brand color is `#c4698f` (pink). To change it:

- Search for `#c4698f` across all CSS files
- Replace with your desired color

### Modifying Services:

Edit `src/components/BookingSystem.jsx`:

```javascript
const SERVICES = [
  { id: "service-id", name: "Service Name", duration: 30, price: 25 },
  // Add more services
];
```

### Adjusting Time Slots:

Edit `src/components/BookingSystem.jsx`:

```javascript
const TIME_SLOTS = [
  "09:00",
  "09:30",
  "10:00", // Add or remove time slots
];
```

### Updating Contact Information:

Edit `src/components/Home.jsx` in the contact section.

## Project Structure

```
natalias-nobel-nails/
├── src/
│   ├── components/
│   │   ├── Home.jsx              # Main landing page
│   │   ├── Home.css
│   │   ├── BookingSystem.jsx     # Booking form & calendar
│   │   ├── BookingSystem.css
│   │   ├── AdminLogin.jsx        # Admin authentication
│   │   ├── AdminLogin.css
│   │   ├── AdminDashboard.jsx    # Admin booking management
│   │   ├── AdminDashboard.css
│   │   └── AdminPage.jsx         # Admin route wrapper
│   ├── services/
│   │   └── bookingService.js     # Firebase Firestore functions
│   ├── firebase.js               # Firebase configuration
│   ├── App.jsx                   # Main app with routing
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

## Troubleshooting

### Firebase Errors:

- Ensure Firebase config is correctly set in `src/firebase.js`
- Check Firestore rules are properly configured
- Verify Authentication is enabled

### Deployment Issues:

- Make sure `base` in `vite.config.js` matches your repository name
- Verify GitHub Pages is enabled on `gh-pages` branch
- Check repository is public (or you have GitHub Pro for private repos)

### Booking Not Working:

- Open browser console to check for errors
- Verify Firebase connection
- Check Firestore rules allow writes

## Future Enhancements

- Email notifications for bookings
- SMS reminders
- Payment integration
- Multi-language support
- Customer booking history
- Calendar export (iCal)
- Staff management
- Service duration-based slot blocking

## License

MIT License - Feel free to use this project for your nail salon or modify it as needed!

## Support

For issues or questions, please create an issue in the GitHub repository.

---

Built with ❤️ for Natalia's Nobel Nails

# Environment Variables Setup

Your Firebase configuration is now stored securely in environment variables.

## What Was Changed

1. **Created `.env` file** - Contains your actual Firebase credentials (NOT committed to Git)
2. **Updated `firebase.js`** - Now reads from environment variables instead of hardcoded values
3. **Updated `.gitignore`** - Ensures `.env` is never committed to Git
4. **Created `.env.example`** - Template file that CAN be committed to show what variables are needed

## Your Firebase Config is Safe! ✅

- ✅ `.env` file contains your real credentials
- ✅ `.env` is in `.gitignore` and won't be pushed to GitHub
- ✅ `.env.example` shows others what variables they need (without real values)

## How It Works

Vite automatically loads environment variables from `.env` files:

- Variables must start with `VITE_` to be accessible in your frontend code
- Access them using `import.meta.env.VITE_VARIABLE_NAME`

## For Local Development

Your `.env` file is already set up and working! Just continue developing as normal:

```bash
npm run dev    # Development server
npm run build  # Production build
```

## For Deployment to GitHub Pages

**Good News:** The `.env` file values are automatically embedded during the build process, so your deployed site will work correctly!

When you run `npm run deploy`, Vite:

1. Reads your `.env` file
2. Replaces all `import.meta.env.VITE_*` references with actual values
3. Bundles everything into static files
4. Deploys those files to GitHub Pages

## If You Need to Share This Project

If someone else clones your repository, they need to:

1. Copy `.env.example` to `.env`

   ```bash
   cp .env.example .env
   ```

2. Fill in their own Firebase credentials in the `.env` file

3. Run the project
   ```bash
   npm install
   npm run dev
   ```

## Security Notes

✅ **This is more secure because:**

- Your Firebase credentials won't be in your Git history
- You won't accidentally commit them when pushing to GitHub
- Different developers can use different Firebase projects (dev/staging/production)

⚠️ **Important:**

- Never commit the `.env` file
- Never share your `.env` file publicly
- The `.env.example` file is safe to commit (it has placeholder values)

## Your Current .env File

Located at: `/Users/brandonw/Documents/natalias-nobel-nails/.env`

Contains your actual Firebase configuration for the "natalias-nobel-nails" project.

---

**Everything is set up and working! Your credentials are now secure.** 🔒

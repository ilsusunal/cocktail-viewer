# 🍸Cocktail Viewer App

This project is a Cocktail Viewer built with Next.js using The Cocktail DB API. It allows users to search for cocktails, manage a cocktail basket, and save their favorite drinks. The app also features an login page to secure access to cocktail pages.

You can visit the deployed on Vercel : [The Cocktail Viewer](https://the-cocktail-viewer-4ejha9fy7-ilsus-projects.vercel.app/)

Try to log in with:
- `Username`: 'test'
- `Password`: 'password123'

## Features
### 1. Cocktail Search Page
- **Search Bar**: Users can search for cocktails by name. Also, cocktails can be filtered by their first letter.
- **Cocktail Cards**: Display search results as cards with a button to add the cocktail to a basket.
- **Basket Management**: The basket is stored in RAM and clears after a page refresh. State management is handled with Context API.
- **Save Button**: Allows users to save cocktails to the Saved Cocktails page. Clicking without being logged in will redirect the user to the login page.

### 2. Saved Cocktails Page
This page is not accessible without log in.
- **Persistent Storage**: Saved cocktails remain even after a page refresh. They are stored in `localStorage`.
- **Remove Option**: Users can remove cocktails from their saved list.

### 3. Login Page
- **Dummy User**: A simple login page with a dummy user account. Dummy user info is provided in `.env.example`.
- **Login-Wall**: Redirects unauthenticated users to the login page when they try to access cocktail pages. This also happens when a user tries to add an item to the basket. Basket features are visible without logging in, but saving requires authentication.

### 4. Extra Points
- **Environment Variables**: Used for `BASE_URL`, `DUMMY_USERNAME`, and `DUMMY_PASSWORD`.
- **Confirmation Dialogs**: Users are prompted for confirmation when adding a cocktail to the basket or removing it from the saved list.
- **Styling**: Styling is done with Tailwind CSS.


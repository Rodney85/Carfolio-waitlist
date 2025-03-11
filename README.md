# Carfolio Waitlist

A waitlist management system for Carfolio built with React, TypeScript, and Convex.

## Features

- Waitlist form for user email collection
- Admin dashboard for managing waitlist entries
- Protected admin routes with authentication
- Convex backend for data storage

## Setup

1. Clone the repository:
   ```
   git clone https://github.com/Rodney85/Carfolio-waitlist.git
   cd Carfolio-waitlist
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory
   - Add your Convex deployment URL:
     ```
     VITE_CONVEX_URL="your-convex-deployment-url"
     ```

4. Start the development server:
   ```
   npm run dev
   ```

## Deployment

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Rodney85/Carfolio-waitlist)

1. Click the "Deploy to Netlify" button above or:
2. Go to [Netlify](https://app.netlify.com/)
3. Click "Add new site" > "Import an existing project"
4. Connect to your GitHub repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Add environment variables:
   - `VITE_CONVEX_URL`: Your Convex deployment URL

## Authentication

The admin dashboard is protected with a simple authentication system:
- Username: (your-username)
- Password: (your-password)

## Development

- Frontend: React, TypeScript, TailwindCSS, Vite
- Backend: Convex
- Deployment: Netlify

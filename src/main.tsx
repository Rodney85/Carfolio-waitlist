import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ConvexProvider } from "convex/react";
import { convex } from "./convex.ts";
import { GoogleAuthProvider } from './contexts/GoogleAuthContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConvexProvider client={convex}>
      <GoogleAuthProvider>
        <App />
      </GoogleAuthProvider>
    </ConvexProvider>
  </React.StrictMode>,
)

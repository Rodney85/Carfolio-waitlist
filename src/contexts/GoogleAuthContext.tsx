import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import googleSheetsService from '../utils/googleSheetsService';
import { GOOGLE_CONFIG, getRedirectUri } from '../config/googleConfig';

interface GoogleAuthContextType {
  isAuthenticated: boolean;
  accessToken: string | null;
  login: () => void;
  logout: () => void;
  saveEmailToSheet: (email: string) => Promise<boolean>;
  isProcessing: boolean;
}

const GoogleAuthContext = createContext<GoogleAuthContextType | undefined>(undefined);

interface GoogleAuthProviderProps {
  children: ReactNode;
}

export const GoogleAuthProvider: React.FC<GoogleAuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  // Check for token on component mount
  useEffect(() => {
    // Check if we have a token in local storage
    const token = localStorage.getItem('googleAccessToken');
    if (token) {
      setAccessToken(token);
      setIsAuthenticated(true);
      googleSheetsService.initialize(token);
    }

    // Check if we have a token in the URL (after OAuth redirect)
    const hash = window.location.hash;
    if (hash) {
      const params = new URLSearchParams(hash.substring(1));
      const token = params.get('access_token');
      
      if (token) {
        setAccessToken(token);
        setIsAuthenticated(true);
        localStorage.setItem('googleAccessToken', token);
        googleSheetsService.initialize(token);
        
        // Clean up the URL
        window.history.replaceState({}, document.title, window.location.pathname);
      }
    }
  }, []);

  // Login function to redirect to Google OAuth
  const login = () => {
    // Use our helper to get the correct redirect URI based on environment
    const redirectUri = getRedirectUri();
    
    // Log the exact URI for debugging purposes
    console.log('Using redirect URI:', redirectUri);
    console.log('Current location:', window.location.href);
    console.log('Is production?', window.location.origin === GOOGLE_CONFIG.PRODUCTION_URL);
    
    // Create auth parameters
    const params = new URLSearchParams({
      client_id: GOOGLE_CONFIG.CLIENT_ID,
      // Use the exact redirect_uri with no modification
      redirect_uri: redirectUri,
      scope: GOOGLE_CONFIG.SCOPES.join(' '),
      response_type: 'token',
      // These settings ensure we always get a fresh token
      prompt: 'consent',
      access_type: 'online',
    });
    
    // Log the full auth URL to check what's being sent
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
    console.log('Full auth URL:', authUrl);
    
    // Redirect to Google OAuth
    window.location.href = authUrl;
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('googleAccessToken');
    setAccessToken(null);
    setIsAuthenticated(false);
  };

  // Save email to Google Sheet
  const saveEmailToSheet = async (email: string): Promise<boolean> => {
    if (!isAuthenticated || !accessToken || !GOOGLE_CONFIG.SPREADSHEET_ID) {
      console.error('Not authenticated or spreadsheet ID not configured');
      return false;
    }

    try {
      setIsProcessing(true);
      await googleSheetsService.addEmailToSheet(GOOGLE_CONFIG.SPREADSHEET_ID, email);
      return true;
    } catch (error) {
      console.error('Error saving email to Google Sheet:', error);
      return false;
    } finally {
      setIsProcessing(false);
    }
  };

  const value = {
    isAuthenticated,
    accessToken,
    login,
    logout,
    saveEmailToSheet,
    isProcessing,
  };

  return (
    <GoogleAuthContext.Provider value={value}>
      {children}
    </GoogleAuthContext.Provider>
  );
};

// Custom hook to use the Google Auth context
export const useGoogleAuth = (): GoogleAuthContextType => {
  const context = useContext(GoogleAuthContext);
  if (context === undefined) {
    throw new Error('useGoogleAuth must be used within a GoogleAuthProvider');
  }
  return context;
};

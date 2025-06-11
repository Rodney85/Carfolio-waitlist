/**
 * Google API configuration settings
 */

export const GOOGLE_CONFIG = {
  CLIENT_ID: '374595940065-jneoao9m67qvlpi9eci40369580kamic.apps.googleusercontent.com',
  SCOPES: [
    'https://www.googleapis.com/auth/spreadsheets',
    'https://www.googleapis.com/auth/drive.file'
  ],
  // You'll need to create a spreadsheet and put its ID here
  SPREADSHEET_ID: '',  // Add your Google Sheet ID here
  
  // URLs for authentication
  PRODUCTION_URL: 'https://carfolio-waitlist.netlify.app',
  DEV_URLS: ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:5175'],
};

/**
 * Helper to get the authorization parameters for Google OAuth
 */
export const getGoogleAuthParams = () => {
  return {
    client_id: GOOGLE_CONFIG.CLIENT_ID,
    scope: GOOGLE_CONFIG.SCOPES.join(' '),
    response_type: 'token',
  };
};

/**
 * Get the appropriate redirect URI based on current environment
 */
export const getRedirectUri = (): string => {
  // If we're on the production domain, use that
  if (window.location.origin === GOOGLE_CONFIG.PRODUCTION_URL) {
    return GOOGLE_CONFIG.PRODUCTION_URL;
  }
  
  // Otherwise use the current origin (for local development)
  return window.location.origin;
};

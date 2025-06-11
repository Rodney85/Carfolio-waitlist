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

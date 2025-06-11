/**
 * A simple, browser-compatible service for interacting with Google Sheets API directly
 * No dependency on googleapis library
 */
export class GoogleSheetsService {
  private static instance: GoogleSheetsService;
  private accessToken: string | null = null;

  private constructor() {}

  // Singleton pattern
  public static getInstance(): GoogleSheetsService {
    if (!GoogleSheetsService.instance) {
      GoogleSheetsService.instance = new GoogleSheetsService();
    }
    return GoogleSheetsService.instance;
  }

  /**
   * Initialize with an access token
   */
  public initialize(accessToken: string): void {
    this.accessToken = accessToken;
  }

  /**
   * Check if the service is initialized
   */
  public isInitialized(): boolean {
    return this.accessToken !== null;
  }

  /**
   * Helper method to make authenticated API requests
   */
  private async fetchWithAuth(url: string, options: RequestInit = {}): Promise<any> {
    if (!this.accessToken) {
      throw new Error('Google Sheets service not initialized');
    }
    
    console.log('Making API request to:', url);
    console.log('Request options:', JSON.stringify({
      method: options.method,
      hasBody: !!options.body,
      hasToken: !!this.accessToken
    }));

    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          ...options.headers,
          'Authorization': `Bearer ${this.accessToken}`,
          'Content-Type': 'application/json'
        }
      });
      
      console.log('API response status:', response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('API error response:', errorText);
        try {
          const errorJson = JSON.parse(errorText);
          console.error('Error details:', errorJson.error?.message || errorJson);
        } catch (e) {
          // Not JSON, continue with text error
        }
        throw new Error(`API error: ${response.status} - ${errorText}`);
      }
      
      const responseData = await response.json();
      console.log('API success response:', responseData);
      return responseData;
    } catch (error) {
      console.error('Fetch error in fetchWithAuth:', error);
      throw error;
    }
  }

  /**
   * Add a new email to the Google Sheet
   */
  public async addEmailToSheet(spreadsheetId: string, email: string): Promise<any> {
    const date = new Date().toISOString();
    
    console.log('Starting addEmailToSheet with:', { spreadsheetId, email });
    
    if (!spreadsheetId || spreadsheetId.trim() === '') {
      console.error('Invalid spreadsheet ID - empty or missing');
      throw new Error('Invalid spreadsheet ID - please configure in admin panel');
    }
    
    try {
      // Use append API to add to the end of the sheet
      const appendUrl = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Sheet1!A:B:append?valueInputOption=USER_ENTERED`;
      console.log('Using append URL:', appendUrl);
      
      const requestBody = {
        values: [[email, date]]
      };
      console.log('Request body:', requestBody);
      
      const result = await this.fetchWithAuth(appendUrl, {
        method: 'POST',
        body: JSON.stringify(requestBody)
      });
      
      console.log('Successfully added email to sheet, result:', result);
      return result;
    } catch (error) {
      console.error('Error adding email to Google Sheet:', error);
      // Check for common issues
      if (error instanceof Error) {
        if (error.message.includes('404')) {
          console.error('Spreadsheet not found - check your spreadsheet ID');
        } else if (error.message.includes('403')) {
          console.error('Permission denied - make sure the sheet is shared with your account');
        } else if (error.message.includes('invalid_grant') || error.message.includes('token')) {
          console.error('Authentication issue - try signing out and signing in again');
        }
      }
      throw error;
    }
  }

  /**
   * Get all emails from the Google Sheet
   */
  public async getAllEmails(spreadsheetId: string): Promise<string[]> {
    try {
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Sheet1!A:A`;
      const response = await this.fetchWithAuth(url);

      const rows = response.values || [];
      // Skip header row if it exists
      const emails = rows.slice(1).map((row: any[]) => row[0] || '');
      return emails.filter((email: string) => email !== '');
    } catch (error) {
      console.error('Error retrieving emails from Google Sheet:', error);
      throw error;
    }
  }
}

export default GoogleSheetsService.getInstance();

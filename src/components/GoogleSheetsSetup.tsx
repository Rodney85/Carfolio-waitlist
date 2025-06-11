import React, { useState, useEffect } from 'react';
import { useGoogleAuth } from '../contexts/GoogleAuthContext';
import { GOOGLE_CONFIG } from '../config/googleConfig';
import googleSheetsService from '../utils/googleSheetsService';

/**
 * Component for setting up and managing Google Sheets integration
 */
const GoogleSheetsSetup: React.FC = () => {
  const { isAuthenticated, login, logout, isProcessing } = useGoogleAuth();
  const [spreadsheetId, setSpreadsheetId] = useState(GOOGLE_CONFIG.SPREADSHEET_ID || '');
  const [saveStatus, setSaveStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [testStatus, setTestStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [testMessage, setTestMessage] = useState('');

  // Save the spreadsheet ID to localStorage
  const saveSpreadsheetId = () => {
    try {
      localStorage.setItem('googleSheetId', spreadsheetId);
      
      // Also update the runtime configuration
      (GOOGLE_CONFIG as any).SPREADSHEET_ID = spreadsheetId;
      
      setSaveStatus('success');
      setTimeout(() => setSaveStatus('idle'), 3000);
    } catch (error) {
      console.error('Error saving spreadsheet ID:', error);
      setSaveStatus('error');
      setTimeout(() => setSaveStatus('idle'), 3000);
    }
  };

  // Test the Google Sheets connection
  const testConnection = async () => {
    if (!isAuthenticated || !spreadsheetId) {
      setTestStatus('error');
      setTestMessage('You must authenticate and provide a spreadsheet ID first');
      setTimeout(() => setTestStatus('idle'), 3000);
      return;
    }

    try {
      setTestStatus('idle');
      setTestMessage('Testing connection...');
      
      // Try to read from the sheet to test permissions
      await googleSheetsService.getAllEmails(spreadsheetId);
      
      setTestStatus('success');
      setTestMessage('Connection successful! You have access to the spreadsheet.');
      setTimeout(() => setTestStatus('idle'), 5000);
    } catch (error) {
      console.error('Error testing connection:', error);
      setTestStatus('error');
      setTestMessage('Connection failed. Check your spreadsheet ID and permissions.');
      setTimeout(() => setTestStatus('idle'), 5000);
    }
  };

  // Load spreadsheet ID from localStorage on mount
  useEffect(() => {
    const savedId = localStorage.getItem('googleSheetId');
    if (savedId) {
      setSpreadsheetId(savedId);
      // Also update the runtime configuration
      (GOOGLE_CONFIG as any).SPREADSHEET_ID = savedId;
    }
  }, []);

  return (
    <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-lg p-6 w-full max-w-2xl mx-auto my-8">
      <h3 className="text-xl font-medium mb-4 text-white">Google Sheets Integration</h3>
      
      <div className="space-y-6">
        {/* Authentication Section */}
        <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-lg p-4">
          <h4 className="text-lg font-medium mb-2 text-white">Step 1: Authentication</h4>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <p className="text-white/70 text-sm mb-2">
                {isAuthenticated 
                  ? '✅ Authenticated with Google' 
                  : 'Sign in to Google to enable saving waitlist emails to Google Sheets.'}
              </p>
            </div>
            <button
              onClick={isAuthenticated ? logout : login}
              className={`px-4 py-2 rounded-md font-medium transition-all duration-300 ${
                isAuthenticated 
                  ? 'bg-red-500/20 hover:bg-red-500/30 text-red-300' 
                  : 'bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300'
              }`}
              disabled={isProcessing}
            >
              {isAuthenticated ? 'Sign Out' : 'Sign In with Google'}
            </button>
          </div>
        </div>

        {/* Spreadsheet Configuration */}
        <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-lg p-4">
          <h4 className="text-lg font-medium mb-2 text-white">Step 2: Spreadsheet Configuration</h4>
          <p className="text-white/70 text-sm mb-4">
            Enter the ID of the Google Sheet where waitlist emails will be stored.
            You can find this ID in the URL of your spreadsheet: https://docs.google.com/spreadsheets/d/<span className="text-indigo-400">spreadsheet-id</span>/edit
          </p>
          
          <div className="flex gap-3 items-center">
            <input
              type="text"
              value={spreadsheetId}
              onChange={(e) => setSpreadsheetId(e.target.value)}
              placeholder="Enter Spreadsheet ID"
              className="flex-1 bg-white/[0.03] border border-white/10 rounded-md px-3 py-2 text-white placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-indigo-500/50"
            />
            <button
              onClick={saveSpreadsheetId}
              className={`px-4 py-2 rounded-md font-medium ${
                saveStatus === 'success'
                  ? 'bg-green-500/20 text-green-300'
                  : saveStatus === 'error'
                  ? 'bg-red-500/20 text-red-300'
                  : 'bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300'
              }`}
            >
              {saveStatus === 'success' ? 'Saved' : saveStatus === 'error' ? 'Error' : 'Save'}
            </button>
          </div>
          
          <div className="mt-4 text-xs text-white/50">
            <p>Make sure your Google Sheet:</p>
            <ol className="list-decimal list-inside mt-1 space-y-1">
              <li>Has 'Sheet1' as the name of the first sheet</li>
              <li>Column A will store emails, Column B will store timestamps</li>
              <li>Is shared with your Google account with edit permission</li>
            </ol>
          </div>
        </div>

        {/* Test Connection */}
        <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-lg p-4">
          <h4 className="text-lg font-medium mb-2 text-white">Step 3: Test Connection</h4>
          <p className="text-white/70 text-sm mb-4">
            Verify that your Google Sheets integration is working correctly.
          </p>
          
          <div className="flex items-center gap-4">
            <button
              onClick={testConnection}
              disabled={!isAuthenticated || !spreadsheetId}
              className={`px-4 py-2 rounded-md font-medium ${
                !isAuthenticated || !spreadsheetId
                  ? 'bg-gray-500/20 text-gray-400 cursor-not-allowed'
                  : 'bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300'
              }`}
            >
              Test Connection
            </button>
            
            {testMessage && (
              <span className={`text-sm ${
                testStatus === 'success' ? 'text-green-400' : 
                testStatus === 'error' ? 'text-red-400' : 'text-white/70'
              }`}>
                {testMessage}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleSheetsSetup;

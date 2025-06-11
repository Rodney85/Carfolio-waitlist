import { useState } from 'react';
import { useQuery, useMutation } from 'convex/react';
import { api } from '../../convex/_generated/api';
import { Id } from '../../convex/_generated/dataModel';
import { ArrowLeft, Loader2, RefreshCw, Search, Trash2, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import GoogleSheetsSetup from '../components/GoogleSheetsSetup';

// Define interface for waitlist entries
interface WaitlistEntry {
  _id: Id<'waitlist'>;
  email: string;
  createdAt: number;
}

const Admin = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [deleteStatus, setDeleteStatus] = useState<{ id: Id<'waitlist'> | null, loading: boolean }>({ id: null, loading: false });
  
  // Fetch waitlist entries
  const waitlistEntries = useQuery(api.waitlist.getAllWaitlistEntries) || [];
  const waitlistCount = waitlistEntries.length;
  
  // Mutations
  const deleteEntry = useMutation(api.waitlist.deleteWaitlistEntry);
  const clearWaitlist = useMutation(api.waitlist.clearWaitlist);
  
  // Filter entries based on search term
  const filteredEntries = searchTerm.trim() === '' 
    ? waitlistEntries
    : waitlistEntries.filter((entry: WaitlistEntry) => 
        entry.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
  
  // Handle deleting a single entry
  const handleDeleteEntry = async (id: Id<'waitlist'>) => {
    if (confirm('Are you sure you want to delete this email from the waitlist?')) {
      try {
        setDeleteStatus({ id, loading: true });
        await deleteEntry({ id });
        setDeleteStatus({ id: null, loading: false });
      } catch (error) {
        console.error('Error deleting entry:', error);
        setDeleteStatus({ id: null, loading: false });
        alert('Failed to delete entry. Please try again.');
      }
    }
  };
  
  // Handle clearing the entire waitlist
  const handleClearWaitlist = async () => {
    if (confirm(`Are you sure you want to delete ALL ${waitlistCount} entries from the waitlist? This action cannot be undone.`)) {
      try {
        const result = await clearWaitlist();
        alert(`Successfully cleared ${result.count} entries from the waitlist.`);
      } catch (error) {
        console.error('Error clearing waitlist:', error);
        alert('Failed to clear waitlist. Please try again.');
      }
    }
  };
  
  const [activeTab, setActiveTab] = useState<'waitlist' | 'sheets'>('waitlist');

  return (
    <div className="min-h-screen bg-dark-900 text-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-8">
          <Link to="/" className="inline-flex items-center mr-4 text-gray-400 hover:text-white transition">
            <ArrowLeft className="w-5 h-5 mr-1" />
            Back to Home
          </Link>
          <h1 className="text-2xl font-bold">Waitlist Admin</h1>
        </div>
        
        {/* Tab navigation */}
        <div className="flex mb-6 border-b border-gray-800">
          <button
            className={`py-2 px-4 font-medium ${activeTab === 'waitlist' ? 'text-white border-b-2 border-indigo-500' : 'text-gray-400 hover:text-white'}`}
            onClick={() => setActiveTab('waitlist')}
          >
            <div className="flex items-center">
              <Database className="w-4 h-4 mr-2" />
              Waitlist Management
            </div>
          </button>
          <button
            className={`py-2 px-4 font-medium ${activeTab === 'sheets' ? 'text-white border-b-2 border-indigo-500' : 'text-gray-400 hover:text-white'}`}
            onClick={() => setActiveTab('sheets')}
          >
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.5,2h-15C3.12,2,2,3.12,2,4.5v15C2,20.88,3.12,22,4.5,22h15c1.38,0,2.5-1.12,2.5-2.5v-15C22,3.12,20.88,2,19.5,2z M12,18.5l-7.5-7.5l1.41-1.41L12,15.67l6.09-6.08L19.5,11L12,18.5z" />
              </svg>
              Google Sheets Integration
            </div>
          </button>
        </div>
        
        {activeTab === 'waitlist' ? (
        <div className="bg-dark-800 rounded-lg p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-4">
              <div className="bg-dark-700 px-3 py-1 rounded-md text-sm">
                Total Entries: <span className="font-bold">{waitlistCount}</span>
              </div>
              
              {waitlistCount > 0 && (
                <button 
                  onClick={handleClearWaitlist} 
                  className="bg-red-500/10 hover:bg-red-500/20 text-red-400 px-3 py-1 rounded-md text-sm flex items-center transition"
                >
                  <Trash2 className="w-4 h-4 mr-1" />
                  Clear All
                </button>
              )}
            </div>
            
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-500" />
              </div>
              <input
                type="text"
                placeholder="Search emails..."
                className="pl-10 pr-4 py-2 bg-dark-700 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500 w-64"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          {waitlistEntries === undefined ? (
            <div className="flex justify-center items-center py-24">
              <Loader2 className="w-8 h-8 animate-spin text-primary-500" />
            </div>
          ) : waitlistCount === 0 ? (
            <div className="text-center py-24 text-gray-500">
              <p>No entries in the waitlist yet.</p>
            </div>
          ) : filteredEntries.length === 0 ? (
            <div className="text-center py-24 text-gray-500">
              <p>No results found for "{searchTerm}"</p>
              <button 
                onClick={() => setSearchTerm('')}
                className="mt-2 text-primary-500 hover:text-primary-400 inline-flex items-center"
              >
                <RefreshCw className="w-4 h-4 mr-1" /> Clear search
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-dark-700">
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Email</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Date Added</th>
                    <th className="text-right py-3 px-4 text-gray-400 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredEntries.map((entry: WaitlistEntry) => (
                    <tr key={entry._id} className="border-b border-dark-700 hover:bg-dark-700/50 transition">
                      <td className="py-3 px-4">{entry.email}</td>
                      <td className="py-3 px-4 text-gray-400">
                        {new Date(entry.createdAt).toLocaleDateString()} {new Date(entry.createdAt).toLocaleTimeString()}
                      </td>
                      <td className="py-3 px-4 text-right">
                        <button 
                          onClick={() => handleDeleteEntry(entry._id)}
                          disabled={deleteStatus.loading && deleteStatus.id === entry._id}
                          className="text-red-400 hover:text-red-300 transition"
                          title="Delete entry"
                        >
                          {deleteStatus.loading && deleteStatus.id === entry._id ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                          ) : (
                            <Trash2 className="w-4 h-4" />
                          )}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
        ) : (
          <GoogleSheetsSetup />
        )}
      </div>
    </div>
  );
};

export default Admin;

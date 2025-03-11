import React from 'react';
import WaitlistForm from '../components/WaitlistForm';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Test: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-900 text-gray-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white transition mb-4">
            <ArrowLeft className="w-5 h-5 mr-1" />
            Back to Home
          </Link>
          <h1 className="text-2xl font-bold mb-2">Waitlist Form Test</h1>
          <p className="text-gray-400">Test the waitlist form submission to Convex.</p>
        </div>
        
        <WaitlistForm />
        
        <div className="mt-8">
          <Link 
            to="/admin" 
            className="text-primary-500 hover:text-primary-400 transition"
          >
            View Admin Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Test;

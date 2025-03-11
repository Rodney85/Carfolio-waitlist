import { useState } from 'react';
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { useMutation } from 'convex/react';
import { api } from '../../convex/_generated/api';

const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  
  // Convex mutation for adding to waitlist
  const addToWaitlist = useMutation(api.waitlist.addToWaitlist);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setStatus('error');
      setMessage('Please enter your email');
      return;
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email');
      return;
    }
    
    try {
      setStatus('loading');
      
      // Add to Convex
      const result = await addToWaitlist({ email });
      
      // Show success message
      setStatus('success');
      setMessage(result.message);
      
      if (result.isNew) {
        setEmail('');
      }
      
    } catch (error) {
      console.error('Error submitting to waitlist:', error);
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Failed to join waitlist. Please try again later.');
    }
  };
  
  return (
    <div className="max-w-md w-full">
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex items-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-l-lg bg-dark-800 border border-dark-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition duration-200"
            disabled={status === 'loading' || status === 'success'}
          />
          <button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-3 rounded-r-lg transition duration-200 flex items-center justify-center disabled:opacity-70"
          >
            {status === 'loading' ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : status === 'success' ? (
              <CheckCircle2 className="w-5 h-5" />
            ) : (
              <ArrowRight className="w-5 h-5" />
            )}
          </button>
        </div>
        
        {status !== 'idle' && (
          <p className={`mt-2 text-sm ${status === 'error' ? 'text-red-500' : status === 'success' ? 'text-green-500' : 'text-gray-400'}`}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default WaitlistForm;

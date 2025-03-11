import { useState, useEffect } from 'react';
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
  
  // Reset form when status is success after 3 seconds
  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className={`w-full px-4 py-3 rounded-lg sm:rounded-r-none bg-dark-800 border ${
              status === 'error' 
                ? 'border-red-500 focus:ring-red-500' 
                : status === 'success'
                ? 'border-green-500 focus:ring-green-500'
                : 'border-dark-700 focus:ring-primary-500'
            } focus:outline-none focus:ring-2 focus:border-transparent transition duration-200`}
            disabled={status === 'loading' || status === 'success'}
            aria-label="Email address"
          />
          <button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className={`${
              status === 'success' 
                ? 'bg-green-600 hover:bg-green-700' 
                : status === 'error'
                ? 'bg-red-600 hover:bg-red-700'
                : 'bg-primary-500 hover:bg-primary-600'
            } text-white px-4 py-3 rounded-lg sm:rounded-l-none transition duration-200 flex items-center justify-center disabled:opacity-70 min-w-[50px] sm:min-w-[unset] h-12 sm:h-auto`}
            aria-label={
              status === 'loading' 
                ? 'Loading' 
                : status === 'success'
                ? 'Success'
                : 'Join Waitlist'
            }
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
          <p className={`mt-2 text-sm ${
            status === 'error' 
              ? 'text-red-500' 
              : status === 'success' 
              ? 'text-green-500' 
              : 'text-gray-400'
          }`}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default WaitlistForm;

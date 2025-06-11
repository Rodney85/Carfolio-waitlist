import { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { useMutation } from 'convex/react';
import { api } from '../../convex/_generated/api';
import { motion } from 'framer-motion';
import { useGoogleAuth } from '../contexts/GoogleAuthContext';

const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  
  // Convex mutation for adding to waitlist
  const addToWaitlist = useMutation(api.waitlist.addToWaitlist);
  
  // Google Sheets integration
  const { saveEmailToSheet, isAuthenticated } = useGoogleAuth();
  
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
      
      // Also save to Google Sheet if authenticated
      if (isAuthenticated) {
        try {
          await saveEmailToSheet(email);
        } catch (sheetError) {
          console.error('Error saving to Google Sheets:', sheetError);
          // Continue with success even if Google Sheets fails
          // We already have the email in Convex database
        }
      }
      
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
          <motion.input
            whileFocus={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className={`w-full px-4 py-3 rounded-lg sm:rounded-r-none bg-white/[0.03] backdrop-blur-sm border ${
              status === 'error' 
                ? 'border-red-500 focus:ring-red-500/50' 
                : status === 'success'
                ? 'border-green-500 focus:ring-green-500/50'
                : 'border-white/10 focus:ring-indigo-500/50'
            } focus:outline-none focus:ring-2 focus:border-transparent transition duration-300 text-white placeholder:text-white/50`}
            disabled={status === 'loading' || status === 'success'}
            aria-label="Email address"
          />
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className={`${
              status === 'success' 
                ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700' 
                : status === 'error'
                ? 'bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700'
                : 'bg-gradient-to-r from-indigo-500 to-rose-500 hover:from-indigo-600 hover:to-rose-600'
            } text-white px-6 py-3 rounded-lg sm:rounded-l-none transition duration-300 flex items-center justify-center disabled:opacity-80 min-w-[50px] sm:min-w-[unset] h-12 sm:h-auto shadow-lg shadow-indigo-500/20 font-medium`}
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
          </motion.button>
        </div>
        
        {status !== 'idle' && (
          <motion.p 
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`mt-2 text-sm ${
              status === 'error' 
                ? 'text-red-400' 
                : status === 'success' 
                ? 'text-green-400' 
                : 'text-white/60'
            }`}
          >
            {message}
          </motion.p>
        )}
      </form>
    </div>
  );
};

export default WaitlistForm;

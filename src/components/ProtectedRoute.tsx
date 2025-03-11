import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  // Check if user is authenticated
  const isAuthenticated = localStorage.getItem('carfolio_auth') === 'true';
  
  // If not authenticated, redirect to login page
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  // Otherwise, render the protected component
  return <>{children}</>;
};

export default ProtectedRoute;

import { useContext } from 'react';
import { Redirect, Slot } from 'expo-router';
import { AuthContext } from './AuthContext';

export default function ProtectedRoute() {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Redirect href="/auth/login" />;  
  }

  return <Slot />;  
}

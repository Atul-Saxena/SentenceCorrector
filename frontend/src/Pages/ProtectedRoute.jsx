import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, useFirebaseContext } from '../context/FirebaseContext.jsx';

const ProtectedRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const { setUser } = useFirebaseContext();

  useEffect(() => {
    if (user) {
      setUser(user); // Update user context after rendering
    }
  }, [user, setUser]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Navbar />
      {children}
    </>
  );
};


export default ProtectedRoute
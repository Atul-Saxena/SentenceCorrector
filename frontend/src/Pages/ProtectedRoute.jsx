import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, useFirebaseContext } from '../context/FirebaseContext.jsx';
import { ThreeDots } from 'react-loader-spinner'

const ProtectedRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const { setUser } = useFirebaseContext();

  useEffect(() => {
    if (user) {
      setUser(user); // Update user context after rendering
    }
  }, [user, setUser]);

  if (loading) {
    return (
      <div className='flex items-center bg-black justify-center h-screen'>
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#1665d6"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
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
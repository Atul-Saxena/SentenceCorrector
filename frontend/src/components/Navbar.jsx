import React from 'react'
import { useFirebaseContext } from '../context/FirebaseContext.jsx';

const Navbar = () => {

  const {logout} = useFirebaseContext();

  return (
    <>
    <div>Navbar</div>
    <button onClick={logout}>Logout</button>
    </>
  )
}

export default Navbar
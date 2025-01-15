import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { useNavigate } from 'react-router-dom'

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "sentence-corrector-96a6a.firebaseapp.com",
    projectId: "sentence-corrector-96a6a",
    storageBucket: "sentence-corrector-96a6a.firebasestorage.app",
    messagingSenderId: "229503857825",
    appId: "1:229503857825:web:24a26f080595e3da782ce0",
    measurementId: "G-GBMD3EYG66"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

const firebaseContext = createContext(null);

export const useFirebaseContext = () => useContext(firebaseContext);

export const FirbaseProvider = (props) => {

    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        console.log(user);
        
    }, [user]);

    const SignUpwithPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                navigate('/');
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }

    const SignInwithPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigate('/');
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    const logout = () => {
        return signOut(auth).then(() => {
            console.log("Signed Out from logout button");
            navigate('/login');
            
            // Sign-out successful.
        }).catch((error) => {
            console.log(error);
            
            // An error happened.   
        });
    }


    const GoogleAuthentication = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                navigate('/');
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }



    return <firebaseContext.Provider value={{ SignUpwithPassword, SignInwithPassword, GoogleAuthentication, user, setUser, logout }}>
        {props.children}
    </firebaseContext.Provider>
}
import initAuthentication from "../firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from "react";

initAuthentication();

const useFirebase = () => {
    const googleAuth = new GoogleAuthProvider();
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true);
    const signIn = () => {
        // console.log('here');
        setIsLoading(true);
        signInWithPopup(auth, googleAuth)
            .then((result) => {
                setUser(result.user);
            }).catch((error) => {
                setError(error.message)
            });
        setIsLoading(false);
        // console.log(user, error);
    }
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch(err => {
                setError(err.message);
            });
        setIsLoading(false)
    }
    useEffect(() => {
        setIsLoading(true);
        onAuthStateChanged(auth, user => {
            if (user)
                setUser(user);
            setIsLoading(false);
        })
    }, [])
    return {
        user, error, isLoading, signIn, logOut
    }
};

export default useFirebase;
import { createContext } from 'react';
import app from '../../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useState } from 'react';
import { useEffect } from 'react';


export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const auth = getAuth(app)
    const provaider = new GoogleAuthProvider()
    const [loading,setLoading] = useState(true)
    const [user, setUser] = useState({})

    const creatUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const googleUser = ()=>{
        setLoading(true)
        return signInWithPopup(auth, provaider)
    }
    const logout = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    const logIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
        const unsescribe = onAuthStateChanged(auth, (currentuser)=>{
                setUser(currentuser)
                if(currentuser){
                    console.log(currentuser)
                }
                
            })
        
        return ()=>{
            return unsescribe()
        }
    },[])


    const authInfo = {
        user,
        loading,
        creatUser,
        googleUser,
        logout,
        logIn
        

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider
;
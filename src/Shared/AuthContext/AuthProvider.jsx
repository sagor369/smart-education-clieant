import { createContext } from 'react';
import app from '../../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const auth = getAuth(app)
    const provaider = new GoogleAuthProvider()
    const [loading,setLoading] = useState(false)
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
        return signOut(auth)
    }
    const logIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
        const unsescribe = onAuthStateChanged(auth, (currentuser)=>{
                setUser(currentuser)
                if(currentuser){
                    axios.post('https://server-site-alpha.vercel.app/jwt', {email: currentuser?.email})
                    .then(data =>{
                        localStorage.setItem(' access-token', data.data.token)
                        setUser(currentuser)
                        setLoading(false);

                    })
                    console.log(localStorage.getItem('access-token'))
                }
                else{
                    localStorage.removeItem('access-token')
                }
                
            })
            console.log(user)
        
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
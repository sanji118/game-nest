import { createContext, useEffect, useState } from "react"
import auth from "../components/firebase.init";
import { GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] =useState(true);

  const createUser = (email, password) =>{
    setLoading(true);
    return(
      createUserWithEmailAndPassword(auth, email, password)
    )
  }

  const signIn = (email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signInWithGoogle = () =>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
  }

  const signInWithGithub = () =>{
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  }

  const signOutUser =()=>{
    setLoading(true);
    return signOut(auth);
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
      setUser(currentUser);
      setLoading(false);
    })
    return()=>{
      unsubscribe()
    }
  }, [])

  const authInfo = {
    user, 
    loading,
    createUser,
    signInWithGoogle,
    signInWithGithub,
    signIn,
    signOutUser
  }

  return(
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
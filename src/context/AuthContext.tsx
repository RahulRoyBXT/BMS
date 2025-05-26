import { getRedirectResult, onAuthStateChanged, type User } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../common/firebase";
import { AuthContext } from "./Contexts";
// import { doc, setDoc } from "firebase/firestore";

export interface AuthContextType {
  user: User | null;
  loading: boolean;
}


export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<AuthContextType["user"]>(null);
  const [loading, setLoading] = useState<AuthContextType["loading"]>(true);

  useEffect(() => {

    
    getRedirectResult(auth)
      .then((result) => {
        if (result?.user) {
          console.log("Google redirect user:", result.user);
          
          // I will save Data to store
          
        }
      })
      .catch((error: unknown) => {
        if (error instanceof Error) {
          console.error("Google Redirect Error:", error.message);
        } else {
          console.error("Unknown Error:", error);
        }
      });


      
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      console.log("Auth State Changed:", firebaseUser);
      setUser(firebaseUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

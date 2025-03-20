"use client"

/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import { NEXT_PUBLIC_API_URL } from "../constant";

interface User {
  // Add user properties based on your actual user data structure
  id?: string;
  email?: string;
  // ... other user properties
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({children}:{children:React.ReactNode}) => {
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();

    useEffect(()=>{
        checkUser();
    },[])

    const checkUser = async ()=>{
        try {
            const res = await axios.get('/api/auth/me',{withCredentials:true});
            setUser(res.data);
        } catch (error) {
            setUser(null);
        }
    }

    const login = async (email:string,password:string) => {
        try {
            await axios.post(`http://${NEXT_PUBLIC_API_URL}/auth/login`,{email,password},{withCredentials:true});
            await checkUser();
            console.log("user checked");
            
        } catch (error) {
            console.error("login failed",error);
        }
    }

    // const login = async (email:string,password:string) => {
    //     try {
    //         await axios.post("/api/auth/login",{email,password},{withCredentials:true});
    //         await checkUser();
    //     } catch (error) {
    //         console.error("login failed",error);
    //     }
    // }

    const logout = async () => {
        try {
            await axios.post('/api/auth/logout',{},{withCredentials:true});
            setUser(null)
            router.push("/")
        } catch (error) {
            console.error('Logout failed',error)
        }
    }

    return (
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
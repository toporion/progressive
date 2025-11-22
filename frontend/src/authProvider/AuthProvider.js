import React, { createContext, useEffect, useState } from 'react';

import { jwtDecode } from "jwt-decode";
import UseAxiosPublic from '../hooks/useAxiosPublic';


export const AuthContext =createContext(null);
const AuthProvider = ({children}) => {
const [user,setUser]=useState(null);
const [loading,setLoading]=useState(true);
const [isAuthenticated,setIsAuthenticated]=useState(false);
const [error,setError]=useState(null);
const axiosPublic=UseAxiosPublic()


const loginUser =async(email,password)=>{
    
    try{
      const response=await axiosPublic.post('login',{email,password});
      if(response.data.success){
        const token=response.data.jwtToken;
        localStorage.setItem('token',token);
        const decodedUser =jwtDecode(token);
        setUser(decodedUser);
        setIsAuthenticated(true);
       
      }
      return response.data;
    }catch(error){
        setError(error);
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        setUser(null);
       
    }finally{
        setLoading(false);
    }
}

useEffect(()=>{
    const token=localStorage.getItem('token');
  try{
  if(token){
        const decodedUser=jwtDecode(token);
        setUser(decodedUser);
        setIsAuthenticated(true);
        
    }
  }catch(error){
    setError(error);
    localStorage.removeItem('token');
    setIsAuthenticated(false);
   
  }
    setLoading(false);
},[])
    const authInfo={loading,user,isAuthenticated,error,loginUser};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
import React, { useContext } from 'react'
import { AuthContext } from '../auth/context/AuthContext';
import { Navigate,useLocation } from 'react-router-dom'

export const PrivateRoutes = ({children}) => {

    const { AuthState } = useContext( AuthContext );

    const { pathname, search } = useLocation();

    const lastPath = pathname + search;
    localStorage.setItem('lastPath',lastPath);
   
    return ( AuthState?.logged ) ? children : <Navigate to="login" />
}

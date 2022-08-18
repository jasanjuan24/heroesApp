import React, { useContext } from 'react'
import { AuthContext } from '../auth/context/AuthContext';
import { Navigate } from 'react-router-dom'

export const PublicRoute = ({children}) => {

    const { AuthState } = useContext( AuthContext );

    return ( !AuthState?.logged ) ? children : <Navigate to="/" />
}

import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { LoginPage } from '../auth'
import {  HeroesRoutes } from '../heroes';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  return (
    <>
        <Routes>
           
            

            <Route path= "login" element = {
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
             }/>

            <Route path= "/*" element = {
              <PrivateRoutes>
                <HeroesRoutes  />
              </PrivateRoutes>
             }/>
            
        </Routes>
    </>
  )
}

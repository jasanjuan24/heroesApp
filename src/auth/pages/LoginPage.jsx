import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {

  const navigate = useNavigate();
  const {login} = useContext( AuthContext );

  const onLogin = ()=>{
    login('JOSE ALBERT0');

    const lastPath = localStorage.getItem('lastPath') || '/';

    navigate(lastPath, {
      replace: true
    });
  }

  return (
    <>
      <div className='container mt-5'>
          <hr/>
          <button className='btn btn-primary' onClick={ onLogin} > Login</button>
      </div>
    </>
  )
}

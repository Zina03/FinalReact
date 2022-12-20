import { useState } from 'react';

export default function auth() {
    const getToken = () => {
      const tokenString = localStorage.getItem('token');
      const userToken = JSON.parse(tokenString);
      return userToken?.token
    };
  
    const [token, setToken] = useState(getToken());
  
    const saveToken = userToken => {
      localStorage.setItem('token', JSON.stringify(userToken));
      setToken(userToken.token);
    };
  
    return {
      setToken: saveToken,
      token
    }
  }

  function getToken(){
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
  }

  function setToken(){
    localStorage.setItem('token', JSON.stringify(userToken));
      setToken(userToken.token);
  }

  function deleteToken(){
    localStorage.removeItem('token');
  }
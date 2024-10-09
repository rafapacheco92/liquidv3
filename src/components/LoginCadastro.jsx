import React, { useState } from 'react';
import TabsLanding from './TabsLanding/TabsLanding'
import './LoginCadastro.css';
import Cadastro from './Cadastro/Cadastro';
import Login from './Login/Login';

const LoginCadastro = () => {
  const [isLogin, setIsLogin] = useState(false);

  const toggleView = () => {
    setIsLogin(!isLogin);
  };

 

  return (
    <div className="container">
      <TabsLanding />
      <div className="login-cadastro-box">
        <div className={`form-section ${isLogin ? 'login-active' : 'cadastro-active'}`}>
          {isLogin ? (
            <Login />
          ) : (
            <Cadastro />
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginCadastro;

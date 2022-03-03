import React, { useState } from "react";

import "./styles.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('email', email);
    console.log('password', password);
    console.log("login");
  }
  return (
    <div id="login">
      <div className="title">Login</div>
      <div className="form">
        <div className="field">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            name="email" 
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
        </div>

        <div className="field">
          <label htmlFor="password">Senha:</label>
          <input 
            type="password" 
            name="password" 
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>
        </div>

        <div className="actions">
          <button type="button" onClick={handleLogin}>Entrar</button>
        </div>
      </div>
    </div>
  );
}

export default Login
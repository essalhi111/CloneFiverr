import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './Auth';
import "./Navbar.scss";

export const Logina = () => {
  const [user1, setUser] = useState('');
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    auth.logina(user1);
    navigate('/',{replace:true});
  };

  return (
    <div className="login-form" >
      <label>
        Username: <input type="text" name="username" onChange={(e) => setUser(e.target.value)} />
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
  
 

export default Logina;
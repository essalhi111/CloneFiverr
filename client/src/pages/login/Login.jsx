/* import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import './Login.scss';
import axios from 'axios';
import { GoogleLoginButton } from 'react-social-login-buttons';
import { LoginSocialGoogle } from 'reactjs-social-login';
import newRequest from '../../utils/newRequest';

Modal.setAppElement('#root'); // Set the app element for accessibility

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false); // State for modal open/close
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (username !== 'admin' && password !== '123') {
        const res = await newRequest.post('/auth/login', { username, password });
        localStorage.setItem('currentUser', JSON.stringify(res.data));
        navigate('/');
      } else {
        navigate('/admin');
      }
    } catch (err) {
      setError(err.response.data);
      console.log(err.response.data);
    }
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="login">
      <div>
        <LoginSocialGoogle
          client_id={'237475897877-3n6169vpq7mbag40c4l6e3h81johuetm.apps.googleusercontent.com'}
          scope="openid profile email"
          discoveryDocs="claims_supported"
          access_type="offline"
          onResolve={({ provider, data }) => {
            console.log(provider, data);
          }}
          onReject={(err) => {
            console.log(err);
          }}
        >
          <GoogleLoginButton />
        </LoginSocialGoogle>
      </div>
      <button onClick={openModal}>Open Modal</button> { }
      <Modal isOpen={modalOpen} onRequestClose={closeModal}  >
        <form onSubmit={handleSubmit}>
          <h1>Sign in</h1>
          <label htmlFor="">Username</label>
          <input
            name="username"
            type="text"
            placeholder="johndoe" 
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="">Password</label>
          <input name="password" type="password" onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">Login</button>
          {error && error}
        </form>
      </Modal>
    </div>
  );
}

export default Login;
 */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import "./Login.scss";
import axios from "axios";
import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";
import newRequest from "../../utils/newRequest";

Modal.setAppElement("#root"); // Set the app element for accessibility

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false); // State for modal open/close
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (username !== "admin" && password !== "123") {
        const res = await newRequest.post("/auth/login", { username, password });
        localStorage.setItem("currentUser", JSON.stringify(res.data));
        navigate("/");
      } else {
        navigate("/admin");
      }
    } catch (err) {
      setError(err.response.data);
      console.log(err.response.data);
    }
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="login">
      <div>
        
      </div>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={modalOpen} onRequestClose={closeModal} className="modal">
  <div className="modal-content">
    <button className="close-button" onClick={closeModal}>
      <span>&times;</span>
    </button>
    <form onSubmit={handleSubmit}>
      <h1>Sign in</h1>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="johndoe"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          {error && <span className="error">{error}</span>}
        </form>
        </div>
      </Modal>
    </div>
  );
}

export default Login;

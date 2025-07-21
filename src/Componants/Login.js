import React from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Login = () => {
  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      await signInWithEmailAndPassword(auth, email.value, password.value);
      alert('Logged in!');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="email" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
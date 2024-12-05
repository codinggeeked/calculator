import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = ({ onLogin, onRegisterRedirect }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onLogin();  // Update App state to show the Dashboard
    } catch (error) {
      alert('Login failed: ' + error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-lg shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="bg-blue-500 text-white w-full py-2 rounded">
          Login
        </button>
        <div className="mt-4 text-center">
          <button
            type="button"
            onClick={onRegisterRedirect}  // Redirect to Register page
            className="text-blue-500 underline"
          >
            Don’t have an account? Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;

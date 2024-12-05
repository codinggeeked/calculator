import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Register = ({ onRegister, onLoginRedirect }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      onRegister(); // Update App state to show the Dashboard
    } catch (error) {
      alert('Registration failed: ' + error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleRegister}
        className="bg-white p-6 rounded-lg shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
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
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full p-3 mb-4 border rounded"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button className="bg-green-500 text-white w-full py-2 rounded">
          Register
        </button>
        <div className="mt-4 text-center">
          <button
            type="button"
            onClick={onLoginRedirect}  // Redirect to Login page
            className="text-blue-500 underline"
          >
            Already have an account? Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;

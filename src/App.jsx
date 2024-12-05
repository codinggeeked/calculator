import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

const App = () => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      {isAuthenticated ? (
        <Dashboard />
      ) : showRegister ? (
        <Register onRegister={() => setShowRegister(false)} onLoginRedirect={() => setShowRegister(false)} />
      ) : (
        <Login onLogin={() => setAuthenticated(true)} onRegisterRedirect={() => setShowRegister(true)} />
      )}
      <div className="text-center mt-4">
        {showRegister ? (
          <button
            onClick={() => setShowRegister(false)}
            className="text-blue-500 underline"
          >
            Already have an account? Login
          </button>
        ) : (
          <button
            onClick={() => setShowRegister(true)}
            className="text-blue-500 underline"
          >
            Don’t have an account? Register
          </button>
        )}
      </div>
    </>
  );
};

export default App;

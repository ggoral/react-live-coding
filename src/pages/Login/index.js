import React, { useState } from "react";
import { useLocation } from "wouter";
import useUser from 'hooks/useUser'
import { useEffect } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {isLogged, login} = useUser()
  const [, navigate] = useLocation();

  useEffect(() => {
    if (isLogged) navigate('/')
  }, [isLogged, navigate])

  const handleSubmit = (e) => {
    e.preventDefault();
    login({username, password})
  };

  return (
    <div>
      <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Name"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <input
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            value={password}
          />
          <button>Login</button>

        </form>
      
    </div>
  );
}

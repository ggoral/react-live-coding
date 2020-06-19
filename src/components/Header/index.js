import React from "react";
import { Link } from "wouter";
import useUser from 'hooks/useUser'
import './index.css'

export default function Header() {
  const {isLogged, logout} = useUser()

  const handleLogout = e => {
    e.preventDefault()
    logout()
  }

  return (
    <header className={'gf-header'}>
      {isLogged ? (
        <Link className='gf-header-links' href='#' onClick={handleLogout}>
          Log out
        </Link>
      ) : (
        <Link className='gf-header-links' to="/login">
          Login
        </Link>
      )}
    </header>
  );
}

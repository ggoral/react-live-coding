import React from "react";
import useUser from "hooks/useUser";
import { useLocation } from "wouter";
import './Fav.css'

export default function Fav({ id }) {
  const { checkIsFav, isLogged, fav } = useUser();
  const [, navigate] = useLocation();

  const isFav = checkIsFav({id})

  const [
    label,
    emoji
  ] = isFav
    ? ['Remove Gif as Favorite', '❌']
    : ['Add Gif as Favorite', '❤️']

  const handleClick = (e) => {
    if (!isLogged) return navigate("/login");
    fav({id})
  }

  

  return (
    <button className='gf-fav' onClick={handleClick}>
      <span aria-label={label} role="img">
        {emoji}
      </span>
    </button>
  );
}

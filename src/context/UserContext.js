import React, { useState } from "react";
import getFavsService from 'services/getFavs'
import { useEffect } from "react";
const Context = React.createContext({});

export function UserContextProvider({ children }) {
  const [jwt, setJwt] = useState(() => window.sessionStorage.getItem('jwt'));
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    if (jwt) {
      getFavsService({jwt}).then(setFavs)
    }
  }, [jwt])
  

  return (
    <Context.Provider value={{ jwt, favs, setFavs, setJwt }}>
      {children}
    </Context.Provider>
  );
}

export default Context;

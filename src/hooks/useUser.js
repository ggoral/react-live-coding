import {useCallback, useContext, useState} from 'react'
import UserContext from 'context/UserContext'
import loginService from 'services/login'
import addFavService from 'services/addFav'
import {useLocation} from 'wouter'

export default function useUser () {
  const {favs, jwt, setFavs, setJwt} = useContext(UserContext)
  const [state, setState] = useState({ loading: false, error: false })
  const [_, pushLocation] = useLocation()

  const login = useCallback(({username, password}) => {
    setState({ loading: true, error: false })
    loginService({username, password})
      .then(jwt => {
        window.sessionStorage.setItem('jwt', jwt)
        setJwt(jwt)
        setState({ loading: false, error: false })
      })
      .catch(err => {
        setState({ loading: false, error: true })
        console.error(err)
      })
  }, [setJwt, setState])

  const fav = useCallback(({id}) => {
    addFavService({id, jwt})
      .then(setFavs)
      .catch(err => {
        console.error(err)
      })
  }, [jwt, setFavs])

  const checkIsFav = useCallback(({id}) => {
    return favs && favs.some(favId => favId === id)
  }, [favs])

  const logout = useCallback(() => {
    window.sessionStorage.removeItem('jwt')
    setJwt(null)
    pushLocation('/')
  },
    [pushLocation, setJwt]
  )

  const register = useCallback(() => {
    return Promise.resolve(true)
  }, [])

  return {
    checkIsFav,
    fav,
    favs,
    login,
    logout,
    register,
    token: jwt,
    isLogged: Boolean(jwt),
    loading: state.loading,
    error: state.error
  }
}
import { createContext, useState } from 'react'

const USER = {
  username: 'admin',
  password: '1234',
}

const STORAGE_KEY = 'rocket-logged-in'

export const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [logged, setLogged] = useState(() => localStorage.getItem(STORAGE_KEY) === 'true')

  function login(username, password) {
    if (username !== USER.username || password !== USER.password) {
      return false
    }

    localStorage.setItem(STORAGE_KEY, 'true')
    setLogged(true)
    return true
  }

  function logout() {
    localStorage.removeItem(STORAGE_KEY)
    setLogged(false)
  }

  return (
    <AuthContext.Provider value={{ logged, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

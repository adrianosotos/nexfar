import React, { createContext, useState, useContext, useEffect } from 'react'
import Axios from 'axios'

const UserContext = createContext()

export default function UserProvider ({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    Axios.get('http://localhost:5000/cart').then(res => {
      console.log(res.data)
      setUser(res.data[0].client)
    })
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser () {
  const context = useContext(UserContext)
  const { user, setUser } = context

  return { user, setUser }
}

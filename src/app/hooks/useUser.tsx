import { useState } from 'react'

export default function useUser() {
    const userLocalStorageName = `user`
    const [user, setUser] = useState(localStorage.getItem(userLocalStorageName) || {})

    function toggleUser(userObject : { accessToken: string }){        
        setUser(userObject)
        localStorage.setItem(userLocalStorageName, userObject.accessToken)
    }

  return [user, toggleUser]
}
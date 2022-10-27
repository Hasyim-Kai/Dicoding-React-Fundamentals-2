import { useEffect, useState } from 'react'

export default function useUser() {
    const userLocalStorageName = `user`
    const [user, setUser] = useState(localStorage.getItem(userLocalStorageName) || {})

    function toggleUser(userObject : any){        
        setUser(userObject)
        localStorage.setItem(userLocalStorageName, userObject)
    }

  return [user, toggleUser]
}
import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import UserContext from "../../app/Context/UserContext"
import NotesList from "../components/NotesList"

export default function Notes() {
  const navigate = useNavigate();
  const {user} = useContext(UserContext)

  useEffect(() => { 
    if(user.accessToken === undefined){ navigate('/login'); } 
  }, [])
  
  return <main className="">
    <NotesList />
  </main>
}
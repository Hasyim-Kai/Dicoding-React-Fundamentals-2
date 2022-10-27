import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserContext from "../../app/Context/UserContext";
import { deleteNote, getNote } from "../../infrastructure/data/api-data";
import { formatDate } from "../../infrastructure/utils/DateFormatter";

export default function NoteDetail() {
  const [note, setNote] = useState()
  const navigate = useNavigate();
  let { id } = useParams()
  const { user } = useContext(UserContext)

  function handleBack() { navigate(-1) }

  function handleDel(id: any) {deleteNote(id); navigate('/')}

  async function getNoteDetail() {
    const response = await getNote(id)
    response.error === true ? setNote({}) : setNote(response.data)
  }

  useEffect(() => { 
    getNoteDetail()
    if(user.accessToken === undefined){ navigate('/login'); } 
  }, [])

  return <main className="max-w-3xl mx-12 lg:mx-auto my-12">
    {note && (<>
      <button onClick={handleBack} className='mb-12'><i>Back</i></button>
      <h1 className='text-5xl'>{note?.title}</h1>
      <h1 className='text-xl mt-4'><i>{formatDate(note?.createdAt)}</i></h1>
      <h1 className='text-xl mt-6'>{note?.body}</h1>

      <div className="flex justify-around mt-16 pt-8 border-t-2">
        <button onClick={() => handleDel(id)} className='text-xl text-red-500 hover:text-red-800'>Delete</button>
      </div>
    </>)}
  </main>
}
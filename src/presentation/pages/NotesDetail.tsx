import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { archiveNote, deleteNote, getNote, unarchiveNote } from "../../infrastructure/data/local-data";
import { formatDate } from "../../infrastructure/utils/DateFormatter";

export default function NoteDetail() {
  const [note, setNote] = useState()
  const navigate = useNavigate();
  let { id } = useParams()

  function handleArchieve(id: any) {
    archiveNote(id)
    navigate('/archieved')
  }

  function handleUnarchieve(id: any) {
    unarchiveNote(id)
    navigate('/')
  }

  function handleDel(id: any) {
    deleteNote(id)
    navigate('/')
  }

  useEffect(() => { setNote(getNote(id)) }, [])

  return <main className="max-w-3xl mx-12 lg:mx-auto my-12">
    {note && (<>
      <h1 className='text-5xl'>{note.title}</h1>
      <h1 className='text-xl mt-4'><i>{formatDate(note.createdAt)}</i></h1>
      <h1 className='text-xl mt-6'>{note.body}</h1>

      <div className="flex justify-around mt-16 pt-8 border-t-2">
        {note.archived 
          ? <button onClick={() => handleUnarchieve(id)} className='text-xl text-gray-500 hover:text-gray-800'>Unarchieve</button>
          : <button onClick={() => handleArchieve(id)} className='text-xl text-gray-500 hover:text-gray-800'>Archieve</button>}
        <button onClick={() => handleDel(id)} className='text-xl text-red-500 hover:text-red-800'>Delete</button>
      </div>
    </>)}
  </main>
}
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { addNote } from "../../infrastructure/data/local-data";

export default function NewNotes() {
  const navigate = useNavigate();
  const [noteTitle, setNoteTitle] = useState<string>("")
  const [noteDesc, setNoteDesc] = useState<string>("")

  function onTitleChange(e: any) { setNoteTitle(e.target.value) }
  function onDescChange(e: any) { setNoteDesc(e.target.value) }

  function handleSubmit(e: any) {
    e.preventDefault()
    addNote({title: noteTitle, body: noteDesc})
    navigate('/')
  }

  const inputStyle = "w-2/3 p-2 border-b border-black focus:outline-none"

  return <main className="my-10">
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 items-center">
      <label htmlFor=""></label>
      <input type="text" placeholder="Enter the Title" onChange={onTitleChange} className={inputStyle} required />

      <label htmlFor=""></label>
      <textarea cols={30} rows={10} placeholder="Enter the Description" onChange={onDescChange} className={inputStyle} required></textarea>

      <button className="py-4 px-7 text-4xl mt-16 bg-black text-white shadow-lg">Add</button>
    </form>
  </main>
}
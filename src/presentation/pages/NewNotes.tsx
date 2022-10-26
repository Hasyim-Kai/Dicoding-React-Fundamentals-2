import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import ThemeContext from "../../app/Context/Themecontext";
import { addNote } from "../../infrastructure/data/local-data";
import { transitoinStyle } from "../utils/utils-style";

export default function NewNotes() {
  const { theme } = useContext(ThemeContext)
  const navigate = useNavigate();
  const [noteTitle, setNoteTitle] = useState<string>("")
  const [noteDesc, setNoteDesc] = useState<string>("")

  function onTitleChange(e: any) { setNoteTitle(e.target.value) }
  function onDescChange(e: any) { setNoteDesc(e.target.value) }

  function handleSubmit(e: any) {
    e.preventDefault()
    addNote({ title: noteTitle, body: noteDesc })
    navigate('/')
  }

  const inputStyle = `w-2/3 p-2 border-b focus:outline-none ${theme === 'light' ? 'border-black' : 'bg-gray-900 text-white border-white'}`

  return <main className="my-10">
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 items-center">
      <label htmlFor=""></label>
      <input type="text" placeholder="Enter the Title" onChange={onTitleChange} className={inputStyle} required />

      <label htmlFor=""></label>
      <textarea cols={30} rows={10} placeholder="Enter the Description" onChange={onDescChange} className={inputStyle} required></textarea>

      <button className={`py-3 px-7 text-4xl mt-16 border-b hover:shadow-lg 
        ${theme === 'light' ? 'border-black hover:bg-black hover:text-white' : 'bg-gray-900 text-white hover:bg-white hover:text-black'} ${transitoinStyle}`}>
        Add
      </button>
    </form>
  </main>
}
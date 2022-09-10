import { getActiveNotes } from "../../infrastructure/data/local-data"
import NotesList from "../components/NotesList"

export default function Notes() {
  return <main className="">
    <NotesList notesParam={getActiveNotes()} />
  </main>
}
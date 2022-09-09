import { getArchivedNotes } from "../../infrastructure/data/local-data"
import NotesList from "../components/NotesList"

export default function ArchievedNotes() {
    return <main className="">
        <NotesList notesArray={getArchivedNotes()} />
    </main>
}
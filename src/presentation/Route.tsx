import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ArchievedNotes from "./pages/ArchievedNotes";
import Login from "./pages/Login";
import NewNotes from "./pages/NewNotes";
import Notes from "./pages/Notes";
import NoteDetail from "./pages/NotesDetail";
import Page404 from "./pages/Page404";
import Register from "./pages/Register";

export default function AppRoute() {
  return <BrowserRouter >
    <Navbar />
    <main className="w-full min-h-screen">
      <Routes>
        <Route index element={<Notes />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="archieved" element={<ArchievedNotes />} />
        <Route path="new-note" element={<NewNotes />} />
        <Route path="note-detail/:id" element={<NoteDetail />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </main>
  </BrowserRouter >
}
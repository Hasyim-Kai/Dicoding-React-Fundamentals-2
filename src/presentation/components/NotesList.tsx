import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getActiveNotes } from '../../infrastructure/data/api-data';
import { EmptyNotes } from './EmptyNotes';
import NoteItem from './NoteItem';
import SearchBar from './SearchBar';

export default function NotesList() {
  const [notesArray, setNotesArray] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()
  const keyword = searchParams.get('keyword') || ''
  function changeSearchParams(keyword: string) { setSearchParams({ keyword }) }

  async function getNotes() {
    const response = await getActiveNotes()
    response.error === true ? setNotesArray([]) 
    : setNotesArray(response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)))
  }

  useEffect(() => { getNotes() }, [])
  
  return <section className='flex flex-col'>
    <SearchBar handlechangeKeyword={changeSearchParams} />
    <article className='flex gap-5 flex-wrap justify-evenly my-10'>
      {notesArray.length < 1
        ? <EmptyNotes />
        : notesArray
          .filter((note) => note?.title.toLowerCase().includes(keyword.toLowerCase()))
          .map((item: any) => <NoteItem note={item} key={item.id} />)}
    </article>
  </section>
}
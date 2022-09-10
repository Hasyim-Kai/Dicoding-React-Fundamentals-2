import PropTypes, { InferProps } from 'prop-types';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { EmptyNotes } from './EmptyNotes';
import NoteItem from './NoteItem';
import SearchBar from './SearchBar';

export default function NotesList({ notesParam }: InferProps<typeof NotesList.propTypes>) {
  const [notesArray, setNotesArray] = useState(notesParam.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)))
  const [searchParams, setSearchParams] = useSearchParams()
  const keyword = searchParams.get('keyword') || ''
  function changeSearchParams(keyword: string) { setSearchParams({ keyword }) }

  return <section className='flex flex-col'>
    <SearchBar handlechangeKeyword={changeSearchParams} />
    <article className='flex gap-5 flex-wrap justify-evenly my-10'>
      {notesArray.length < 1
        ? <EmptyNotes />
        : notesArray
          .filter((note) => note.title.toLowerCase().includes(keyword.toLowerCase()))
          .map((item: any) => <NoteItem note={item} key={item.id} />)}
    </article>
  </section>
}

NotesList.propTypes = {
  notesParam: PropTypes.array.isRequired
}
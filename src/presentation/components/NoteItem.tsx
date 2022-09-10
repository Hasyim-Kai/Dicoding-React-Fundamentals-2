import React from 'react'
import { Link } from 'react-router-dom'
import { transitoinStyle } from '../utils/utils-style'
import PropTypes, { InferProps } from 'prop-types';
import { archiveNote, deleteNote } from '../../infrastructure/data/local-data';
import { formatDate } from '../../infrastructure/utils/DateFormatter';

export default function NoteItem({note, isArchieved = false}: InferProps<typeof NoteItem.propTypes>) {
    return <Link to={`/note-detail/${note.id}`} className='w-10/12 lg:w-96'>
        <div className={`p-5 border-b-2 hover:shadow-lg ${transitoinStyle}`}>

            <h1 className='text-2xl'>{note.title}</h1>
            <h1 className='text-md mt-2'><i>{formatDate(note.createdAt)}</i></h1>
            <h1 className='truncate mt-4'>{note.body}</h1>

        </div>
    </Link>
}

NoteItem.propTypes = {
    note: PropTypes.object.isRequired,
    isArchieved: PropTypes.bool
}
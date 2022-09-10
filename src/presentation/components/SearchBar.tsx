import PropTypes, { InferProps } from 'prop-types';
import { useState } from 'react'
import { useLocation } from 'react-router-dom';

export default function SearchBar({ handlechangeKeyword }: InferProps<typeof SearchBar.propTypes>) {
    const location = useLocation();

    return location.pathname === '/' || location.pathname === '/archieved'
        ? <>
            <input type="text" onChange={(e: any) => handlechangeKeyword(e.target.value)} placeholder="Search Note"
                className="w-3/5 mx-auto p-3 mt-6 border-b border-black focus:outline-none" />
        </>
        : <></>
}

SearchBar.propTypes = {
    handlechangeKeyword: PropTypes.func.isRequired
}
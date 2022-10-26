import PropTypes, { InferProps } from 'prop-types';
import { useContext, useState } from 'react'
import { useLocation } from 'react-router-dom';
import ThemeContext from '../../app/Context/Themecontext';

export default function SearchBar({ handlechangeKeyword }: InferProps<typeof SearchBar.propTypes>) {
    const {theme} = useContext(ThemeContext)
    const location = useLocation();

    return location.pathname === '/' || location.pathname === '/archieved'
        ? <>
            <input type="text" onChange={(e: any) => handlechangeKeyword(e.target.value)} placeholder="Search Note"
                className={`w-3/5 mx-auto p-3 mt-6 border-b focus:outline-none 
                    ${theme === 'light' ? 'border-black' : 'bg-gray-900 text-white border-white'}`} />
        </>
        : <></>
}

SearchBar.propTypes = {
    handlechangeKeyword: PropTypes.func.isRequired
}
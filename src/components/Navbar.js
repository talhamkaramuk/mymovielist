import React, { useContext } from 'react'
import { MovieContext } from '../context/MovieContext';

const Navbar = () => {

    const { movies } = useContext(MovieContext);

    return (
        <div className="navbar">
            <h1>My Movie List</h1>
            <p>Currenty you have {movies.length} movies to watch</p>
        </div>
    );
}

export default Navbar;
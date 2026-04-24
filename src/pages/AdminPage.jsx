import { useState, useEffect } from 'react';


import AdminTabMovies from '../components/AdminTabMovies';


export default function AdminPage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3010/movies')
            .then(res => res.json())
            .then(data => setMovies(data.movies))
            .catch(err => console.error(err));
    }, []);

    return (
        <>

            <div className="container py-4 bg-white rounded bg-opacity-75 mt-4">
                <h2>Admin - Lista Film</h2>


                {/* Tabella Film Admin */}
                <AdminTabMovies movies={movies} />

            </div>

        </>

    );
}
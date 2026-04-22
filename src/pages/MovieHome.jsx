import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';


import MovieList from '../components/MovieList'


export default function MovieHome() {
  const [movies, setMovies] = useState([]);


  // Chiamata API per ottenere la lista dei film salvata nel mio database
  useEffect(() => {
    fetch('http://localhost:3010/movies')
      .then(res => res.json())
      .then(data => setMovies(data.movies))
      .catch(err => console.error(err));
  }, []);


  return (

    <>

      {/* Lista Film */}
      <MovieList movies={movies} />

    </>

  );

}
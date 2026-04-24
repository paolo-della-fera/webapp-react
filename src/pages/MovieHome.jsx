import { useState, useEffect } from 'react';
import { useLoader } from '../contexts/LoaderContext';
import MovieCard from '../components/MovieCard';

import MovieList from '../components/MovieList'


export default function MovieHome() {
  const [movies, setMovies] = useState([]);
  const { setIsLoading } = useLoader();


  // Chiamata API per ottenere la lista dei film salvata nel mio database
  useEffect(() => {
    setIsLoading(true);
    fetch('http://localhost:3010/movies')
      .then(res => res.json())
      .then(data => setMovies(data.movies))
      .catch(err => console.error(err))
      .finally(() => setIsLoading(false));
  }, []);


  return (

    <>

      {/* Lista Film */}
      <MovieList movies={movies} />

    </>

  );

}
import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';

export default function MovieHome() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3010/movies')
      .then(res => res.json())
      .then(data => setMovies(data.movies))
      .catch(err => console.error(err));
  }, []);

  return (

    <>

      <div className="container">

        <div className="row">
          {
            movies.map(movie => (
              <div className="col-12 col-md-4 g-4" key={movie.id}>
                <MovieCard movie={movie} />
              </div>
            ))
          }
        </div>

      </div>

    </>

  );

}
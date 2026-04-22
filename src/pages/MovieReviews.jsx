import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


import MovieDetail from '../components/MovieDetails';
import ReviewList from '../components/ReviewList';
import ReviewForm from '../components/ReviewForm';


export default function MovieReviews() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3010/movies/${id}`)
            .then(res => res.json())
            .then(data => setMovie(data.film))
            .catch(err => console.error('Errore fetch:', err));
    }, [id]);

    if (!movie) return <div>Caricamento...</div>;

    
    return (

        <>

            {/* Dettagli del Film */}
            <MovieDetail movie={movie} />


            {/* Lista recensioni */}
            <ReviewList reviews={movie.reviews} />


            {/* Form per lasciare una recenzione */}
            <ReviewForm /> 


        </>

    );
}
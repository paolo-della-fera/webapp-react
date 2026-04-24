import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLoader } from '../contexts/LoaderContext';

import MovieDetail from '../components/MovieDetails';
import ReviewList from '../components/ReviewList';
import ReviewForm from '../components/ReviewForm';

export default function MovieReviews() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [reviews, setReviews] = useState([]);
    const { setIsLoading } = useLoader();

    useEffect(() => {
        setIsLoading(true);
        fetch(`http://localhost:3010/movies/${id}`)
            .then(res => res.json())
            .then(data => {
                setMovie(data.film);
                setReviews(data.film.reviews);
            })
            .catch(err => console.error('Errore fetch:', err))
            .finally(() => {setIsLoading(false);});
    }, [id]);

    const handleNewReview = (newReview) => {
        setReviews([...reviews, newReview]);
    }

    if (!movie) return null;


    return (

        <>

            {/* Dettagli del Film */}
            <MovieDetail movie={movie} />


            {/* Lista recensioni */}
            <ReviewList reviews={reviews} />


            <hr className='mt-5' />


            {/* Form per lasciare una recensione */}
            <ReviewForm movieId={id} onSubmit={handleNewReview} />

        </>

    );

}
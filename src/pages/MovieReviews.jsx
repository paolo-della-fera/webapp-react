import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
            <div className="container py-4">

                <div className="card">

                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={`http://localhost:3010/image/${movie.image}`} className="img-fluid rounded-start h-100 object-fit-cover" alt={movie.title} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h2 className="card-title">{movie.title}</h2>
                                <h6 className="text-muted">{movie.director}</h6>
                                <span className="badge bg-warning mb-2">{movie.genre}</span>
                                <p className="card-text">{movie.abstract}</p>
                                <small className="text-muted">Anno: {movie.release_year}</small>
                            </div>
                        </div>
                    </div>

                </div>

            </div>


            {/* Lista recensioni */}
            <div className="container">
                <ul className="list-group mt-4">

                    {
                        movie.reviews.map(review => (
                            <li key={review.id} className="list-group-item">
                                <div className="d-flex justify-content-between">
                                    <strong>{review.name}</strong>
                                    <span>⭐ {review.vote}/5</span>
                                </div>
                                <p className="mb-0">{review.text}</p>
                            </li>
                        ))
                    }

                </ul>

            </div>

        </>

    );
}
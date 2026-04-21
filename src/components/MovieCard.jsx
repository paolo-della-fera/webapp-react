import { Link } from 'react-router-dom';

export default function MovieCard({ movie }) {


    return (
        <>

            {/* Card del Film */}
            <div className="card h-100 bg-light">
                <img src={`http://localhost:3010/image/${movie.image}`} className="card-img-top" alt={movie.title} />

                <div className="card-body">

                    <h4 className="card-title">{movie.title}</h4>
                    <h6 className='card-text'>{movie.director}</h6>
                    <p className="card-text text-secondary ">{movie.abstract}</p>
                    <Link to={`/movies/${movie.id}`} className="btn btn-primary">
                        Recenzioni
                    </Link>

                </div>

            </div>

        </>
    );
}
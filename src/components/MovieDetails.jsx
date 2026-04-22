export default function MovieDetail({ movie }) {


    return (

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

    );
    
}
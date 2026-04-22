import MovieCard from './MovieCard';


export default function MovieList({ movies }) {


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
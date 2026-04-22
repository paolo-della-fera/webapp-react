export default function AdminTabMovies({ movies }) {


    return (

        <>
        
            <table className="table table-striped mt-3">

                <thead>
                    <tr>
                        <th>#</th>
                        <th>Titolo</th>
                        <th>Regista</th>
                        <th>Genere</th>
                        <th>Anno</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        movies.map(movie => (
                            <tr key={movie.id}>
                                <td>{movie.id}</td>
                                <td>{movie.title}</td>
                                <td>{movie.director}</td>
                                <td>{movie.genre}</td>
                                <td>{movie.release_year}</td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>

        </>

    );
}
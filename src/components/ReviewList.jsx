export default function ReviewList({ reviews }) {

    // Funzione per renderizzare le stelle in base al voto
    const renderStars = (vote) => {

        // Creo un array di 5 elementii
        return Array.from({ length: 5 }, (_, i) => (
            // Se l'indice è minore del voto, mostro una stella piena altrimenti una stella vuota
            <i key={i} className={i < vote ? 'bi bi-star-fill text-warning' : 'bi bi-star text-warning'}></i>
        ));

    }

    return (

        <>

            <div className="container">

                <ul className="list-group mt-4">

                    {
                        reviews.map(review => (
                            <li key={review.id} className="list-group-item">
                                <div className="d-flex justify-content-between">
                                    <strong>{review.name}</strong>
                                    <span>{renderStars(review.vote)}</span>
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
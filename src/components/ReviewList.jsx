export default function ReviewList({ reviews }) {


    return (
        <>

            <div className="container">

                <ul className="list-group mt-4">

                    {
                        reviews.map(review => (
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
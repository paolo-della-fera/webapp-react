import { useState } from 'react';

export default function ReviewForm({ movieId, onSubmit }) {
    const [formData, setFormData] = useState({
        name: '',
        vote: '',
        text: ''
    });


    // Funzione per gestire i cambiamenti nei campi del form
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    }


    // Funzione per gestire l'invio del form
    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`http://localhost:3010/movies/${movieId}/reviews`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(() => {
                onSubmit(formData);
                setFormData({ name: '', vote: '', text: '' });
            })
            .catch(err => console.error(err));
    }


    return (

        <>

            <div className="container mt-4 bg-white rounded p-4 bg-opacity-75">
                <h3>Lascia una recensione</h3>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nome</label>
                        <input type="text" className="form-control" id="name" value={formData.name} onChange={handleChange} placeholder="Il tuo nome" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="vote" className="form-label">Voto</label>
                        <select className="form-select" id="vote" value={formData.vote} onChange={handleChange}>
                            <option value="">Seleziona un voto</option>
                            <option value="1">1 ⭐</option>
                            <option value="2">2 ⭐⭐</option>
                            <option value="3">3 ⭐⭐⭐</option>
                            <option value="4">4 ⭐⭐⭐⭐</option>
                            <option value="5">5 ⭐⭐⭐⭐⭐</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="text" className="form-label">Recensione</label>
                        <textarea className="form-control" id="text" rows="1" value={formData.text} onChange={handleChange} placeholder="Scrivi la tua recensione..."></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary">Invia recensione</button>
                </form>

            </div>

        </>

    );
}
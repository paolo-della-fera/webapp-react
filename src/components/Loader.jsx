import { useLoader } from '../contexts/LoaderContext';


export default function Loader() {
    const { isLoading } = useLoader();

    if (!isLoading) return null;


    return (

        <>

            <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-black bg-opacity-50" style={{ zIndex: 9999 }}>
                
                <div className="spinner-border text-light" role="status">
                    <span className="visually-hidden">Caricamento...</span>
                </div>

            </div>

        </>

    );
    
}
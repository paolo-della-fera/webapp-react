import { Link } from 'react-router-dom';

export default function AppHeader() {


  return (

    <>

      <nav className="navbar navbar-dark bg-dark">

        <div className="container">

          <Link className="navbar-brand" to="/">
            <i className="bi bi-camera-reels me-2"></i> 
            Movie App
          </Link>

          <div>
            <Link className="btn btn-outline-light me-2" to="/">Home</Link>
            <Link className="btn btn-outline-light" to="/admin">Admin</Link>
          </div>

        </div>

      </nav>

    </>

  );
}
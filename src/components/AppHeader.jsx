import { Link } from 'react-router-dom';

export default function AppHeader() {



  return (

    <>

      <nav className="navbar navbar-dark bg-dark">

        <div className="container-fluid">
          <Link className="navbar-brand" to="/">🎬 Movie App</Link>
          <Link className="btn btn-outline-light" to="/">Home</Link>
        </div>

      </nav>

    </>

  );
}
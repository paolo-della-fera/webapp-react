import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import MovieHome from './pages/MovieHome';
import MovieReviews from './pages/MovieReviews';
import AdminPage from './pages/AdminPage';


function App() {


  return (

    
    // Router dell'app
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<MovieHome />} />
          <Route path="/movies/:id" element={<MovieReviews />} />
          <Route path="/admin" element={<AdminPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;

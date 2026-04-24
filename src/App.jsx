import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import MovieHome from './pages/MovieHome';
import MovieReviews from './pages/MovieReviews';
import AdminPage from './pages/AdminPage';
import { LoaderProvider } from './contexts/LoaderContext';
import Loader from './components/Loader';


function App() {


  return (


    // Router dell'app
    <LoaderProvider>
      <BrowserRouter>
        <Loader />
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<MovieHome />} />
            <Route path="/movies/:id" element={<MovieReviews />} />
            <Route path="/admin" element={<AdminPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LoaderProvider>

  );
}

export default App;

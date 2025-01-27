import './App.css';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListaCategorias from './components/categoria/listacategoria/ListaCategoria';
import FormCategoria from './components/categoria/formscategoria/FormsCategoria';
import DeleteCategoria from './components/categoria/deletecategoria/DeleteCategoria';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/categoria" element={<ListaCategorias />} />
          <Route path="/cadastrar" element={<FormCategoria />} />
          <Route path="/editarcategoria/:id" element={<FormCategoria />} />
          <Route path="/deletarcategoria/:id" element={<DeleteCategoria />} />

          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
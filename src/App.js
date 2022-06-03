import './App.css';
import NavBar from './Components/Nav/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contacto from './Components/pages/Contacto'
import Nosotros from './Components/pages/Nosotros'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import Productos from './Components/pages/Productos'
import Home from './Components/pages/Home'

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/nosotros' element={<Nosotros />} />
            <Route exact path='/productos/:categoria' element={<Productos />} />
            <Route exact path='/contacto' element={<Contacto />} />
            <Route exact path='/producto/:id' element={<ItemDetailContainer />} />
          </Routes>
        </BrowserRouter>
        
      </div>
    
  );
}

export default App;

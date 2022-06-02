import './App.css';
import NavBar from './Components/Nav/NavBar';
import CardList from './Components/CardListContainer/CardList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contacto from './Components/pages/Contacto'
import Nosotros from './Components/pages/Nosotros'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import Productos from './Components/pages/Productos'

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<CardList />} />
            <Route exact path='/productos/:id' element={<ItemDetailContainer />} />
            <Route exact path='/contacto' element={<Contacto />} />
            <Route exact path='/productos' element={<Productos />} />
            <Route exact path='/nosotros' element={<Nosotros />} />
          </Routes>
        </BrowserRouter>
        
      </div>
    
  );
}

export default App;

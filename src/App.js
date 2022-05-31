import './App.css';
import NavBar from './Components/Nav/NavBar';
//import CardList from './Components/CardListContainer/CardList';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route />
          </Routes>
        </BrowserRouter>
        
        <h1>Armen - Ropa interior masculina</h1>
        {/* <CardList titulo={"PRODUCTOS MAS BUSCADOS"}/> */}
        <ItemDetailContainer />
      </div>
    
  );
}

export default App;

import './App.css';
import NavBar from './Components/Nav/NavBar';
import CardList from './Components/CardListContainer/CardList';

function App() {
  return (
      <div className="App">
        <NavBar />
        <h1>Armen - Ropa interior masculina</h1>
        <CardList titulo={"PRODUCTOS MAS BUSCADOS"}/>
      </div>
    
  );
}

export default App;

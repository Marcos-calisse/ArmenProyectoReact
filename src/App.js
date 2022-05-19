import './App.css';
import NavBar from './Components/Nav/NavBar';
import CardList from './Components/CardListContainer/CardList';

function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <h1>Armen - Ropa interior masculina</h1>
        <CardList titulo={"PRODUCTOS MAS BUSCADOS"}/>
        <CardList titulo={"Productos Relacionados"}/>
      </div>
    </>
    
  );
}

export default App;

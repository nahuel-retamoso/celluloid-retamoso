import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  
  return (

    <div className="App">
      <ItemListContainer greeting="Lorem ipsum dolor sit amet"/>
      <ItemDetailContainer/>
    </div>
  )
}

export default App;

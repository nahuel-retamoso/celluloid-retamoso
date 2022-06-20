import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import CartContainer from './components/CartContainer/CartContainer';
import { CartContextProvider } from './components/CartContext/CartContext'
import Checkout from './components/Checkout/Checkout'


function App() {
  
  return (
    <div className="App">

      <BrowserRouter>
        <CartContextProvider>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting= 'Todos los productos'/>} />
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='/category/:id' element={<ItemListContainer/>} />
            <Route path='/*' element={<h1>Page not found =(</h1>}/>
            <Route path='/cart' element={<CartContainer/>} />
            <Route path='/checkout' element={<Checkout/>} />
          </Routes>
        </CartContextProvider>
      </BrowserRouter>

    </div>
  )
}

export default App;

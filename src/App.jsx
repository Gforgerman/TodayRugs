import './../src/styles/main.scss';
import Home from './Home';
import Cart from './components/commons/atoms/cart/Cart';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import NavBar from './components/navbar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './context/CartContext';
import Document from './Document';
import Collection from './Collection';
const App = () => {
  return (
    <div className="today-home">
      <BrowserRouter>
        <NavBar />
        <CartProvider>
          <Routes>
            {/* <Route exact path="/" element={<Document />} /> */}
            {/* <Route exact path="/" element={<Collection />} /> */}
            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
            <Route exact path="/category/:category" element={<ItemListContainer />}/>
            <Route exact path="/productos" element={<ItemListContainer />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
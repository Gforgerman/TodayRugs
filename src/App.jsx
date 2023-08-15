import "./../src/styles/main.scss";
import Home from "./Home";
import Cart from "./components/cart/cart";
import ItemDetail from "./components/itemDetail/ItemDetail";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import NavBar from "./components/navbar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div className="today-home">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/item/:id" element={<ItemDetail />} />
          <Route
            exact
            path="/category/:category"
            element={<ItemListContainer />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

import './../src/styles/main.scss'
import CartWidget from './components/cartWidget/CartWidget'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import NavBar from './components/navbar/NavBar'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
const Home = () => {
  return (
    <div className="today-home">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={ <ItemListContainer/>}/>
          <Route exact path='/cart' element={ <CartWidget/>}/>


        </Routes>

        </BrowserRouter>
    </div>
  )
}

export default Home

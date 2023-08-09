import './../src/styles/main.scss'
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
       


        </Routes>

        </BrowserRouter>
    </div>
  )
}

export default Home

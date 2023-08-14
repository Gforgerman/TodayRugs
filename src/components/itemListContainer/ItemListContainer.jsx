import ItemList from '../itemList/ItemList'
import './ItemListContainer.scss'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
  const { category } = useParams()
  const todayProducts = [
    { id: 1, nombre: "Pikachu", descripcion: 'tapete A', stock: 5, category: 'min' },
    { id: 2, nombre: "murakami", descripcion: 'tapete A', stock: 8, category: 'min' },
    { id: 3, nombre: "blastoise", descripcion: 'tapete B', stock: 3, category: 'mid' },
    { id: 4, nombre: "gengar", descripcion: 'tapete B', stock: 12, category: 'mid' },
    { id: 5, nombre: "cdg", descripcion: 'tapete C', stock: 6, category: 'max' },
  ]

  const getProductos = new Promise((resolve, reject) => {
    if (todayProducts.length > 0) {
      setTimeout(() => {
        resolve(todayProducts)
      }, 2000);
    } else {
      reject(new Error)
    }
  })

  getProductos
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
      alert("error")
    })

  const filteredProducts = todayProducts.filter((product) => product.category === category)
  return (
    <div className='today-ItemListContainer'>
      <div className="contenedoritem">
        <ItemList
          productos={filteredProducts}
        />
      </div>
    </div>
  )
}

export default ItemListContainer;

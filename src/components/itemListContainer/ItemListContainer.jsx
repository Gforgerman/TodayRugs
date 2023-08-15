import ItemList from '../itemList/ItemList';
import './ItemListContainer.scss';
import { useParams } from 'react-router-dom';
import Pikachu from './../../assets/img/pikachu.png';
import Murakmi from './../../assets/img/murakami.png';
import Blastoise from './../../assets/img/blastoise.png';
import Gengar from './../../assets/img/gengar.png';
import Cdg from './../../assets/img/cdg.png';
const ItemListContainer = () => {
  const { category } = useParams();
  const todayProducts = [
    {
      id: 1,
      imagen: Pikachu,
      nombre: 'Pikachu',
      descripcion: 'tapete A',
      stock: 5,
      category: 'min',
    },
    {
      id: 2,
      imagen: Murakmi,
      nombre: 'murakami',
      descripcion: 'tapete A',
      stock: 8,
      category: 'min',
    },
    {
      id: 3,
      imagen: Blastoise,
      nombre: 'blastoise',
      descripcion: 'tapete B',
      stock: 3,
      category: 'mid',
    },
    {
      id: 4,
      imagen: Gengar,
      nombre: 'gengar',
      descripcion: 'tapete B',
      stock: 12,
      category: 'mid',
    },
    {
      id: 5,
      imagen: Cdg,
      nombre: 'cdg',
      descripcion: 'tapete C',
      stock: 6,
      category: 'max',
    },
  ];

  const getProductos = new Promise((resolve, reject) => {
    if (todayProducts.length > 0) {
      setTimeout(() => {
        resolve(todayProducts);
      }, 2000);
    } else {
      reject(new Error());
    }
  });

  getProductos
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
      alert('error');
    });

  const filteredProducts = todayProducts.filter(
    (product) => product.category === category,
  );
  return (
    <div className="today-ItemListContainer">
      <div className="contenedoritem">
        <ItemList productos={filteredProducts} />
      </div>
    </div>
  );
};

export default ItemListContainer;

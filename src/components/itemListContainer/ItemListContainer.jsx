import ItemList from '../itemList/ItemList';
import './ItemListContainer.scss';
import { useParams } from 'react-router-dom';
import Pikachu from './../../assets/img/pikachu.png';
import Murakmi from './../../assets/img/murakami.png';
import Blastoise from './../../assets/img/blastoise.png';
import Gengar from './../../assets/img/gengar.png';
import Cdg from './../../assets/img/cdg.png';
import { useContext, useEffect, useState } from 'react';
import Store from '../commons/home/organisms/store/Store';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const ItemListContainer = () => {
  // const { category } = useParams();

  // const todayProducts = [
  //   {
  //     id: 1,
  //     imagen: Pikachu,
  //     nombre: 'Pikachu',
  //     descripcion: 'tapete A',
  //     stock: 5,
  //     category: 'min',
  //   },
  //   {
  //     id: 2,
  //     imagen: Murakmi,
  //     nombre: 'murakami',
  //     descripcion: 'tapete A',
  //     stock: 8,
  //     category: 'min',
  //   },
  //   {
  //     id: 3,
  //     imagen: Blastoise,
  //     nombre: 'blastoise',
  //     descripcion: 'tapete B',
  //     stock: 3,
  //     category: 'mid',
  //   },
  //   {
  //     id: 4,
  //     imagen: Gengar,
  //     nombre: 'gengar',
  //     descripcion: 'tapete B',
  //     stock: 12,
  //     category: 'mid',
  //   },
  //   {
  //     id: 5,
  //     imagen: Cdg,
  //     nombre: 'cdg',
  //     descripcion: 'tapete C',
  //     stock: 6,
  //     category: 'max',
  //   },
  // ];

  // const getProductos = new Promise((resolve, reject) => {
  //   if (todayProducts.length > 0) {
  //     setTimeout(() => {
  //       resolve(todayProducts);
  //     }, 2000);
  //   } else {
  //     reject(new Error());
  //   }
  // });

  // getProductos
  //   .then((res) => {
  //     // console.log(res);
  //   })
  //   .catch((error) => {
  //     // console.log(error);
  //     alert('error');
  //   });

  // const [filteredProducts, setFilteredProducts] = useState([]);

  // useEffect(() => {
  //   if (category) {
  //     const filtered = todayProducts.filter((product) => product.category === category);
  //     setFilteredProducts(filtered);
  //   } else {
  //     // Si no hay una categoría seleccionada, muestra todos los productos.
  //     setFilteredProducts(todayProducts);
  //   }
  // }, [category]);

  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    const db = getFirestore();

    const itemCollections = collection(db, 'TAPETES');
    getDocs(itemCollections).then((snapshots) =>{
      const docs = snapshots.docs.map((doc)=> doc.data());
      setProducts(docs);
    });
  }, []);

  return (
    <div className="today-ItemListContainer">
      <div className="contenedoritem">
        <ItemList productos={products} />
      </div>
    </div>
  );
};

export default ItemListContainer;

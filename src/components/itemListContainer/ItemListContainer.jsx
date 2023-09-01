import ItemList from '../itemList/ItemList';
import './ItemListContainer.scss';
import { useParams } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import Store from '../commons/home/organisms/store/Store';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { database } from '../../main';
import Loader from '../commons/atoms/loader/Loader';

const ItemListContainer = () => {

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const {categoria} = useParams(); 

  useEffect(() => {        

             
    const getData = async () => {

      const queryRef = !categoria

        ? collection(database, 'TAPETES')

        : query(
          collection(database, 'TAPETES'),
          where('categoria', '==', categoria)
        );

      const response = await getDocs(queryRef);

      const productos = response.docs.map((doc) => {
        const newProduct = {
          ...doc.data(),
          id: doc.id,
        };

        return newProduct;
      });
      setTimeout(() => {
        setLoading(false);
        setProducts(productos);
    
      }, 2000);
    };

    getData();

  }, [categoria]);

  if (loading) {
    return <Loader/>;
  }

  return (
    <div className="today-ItemListContainer">
      <div className="contenedoritem">
        <ItemList productos={products} />
      </div>
    </div>
  );
};

export default React.memo(ItemListContainer);

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
import ItemDetail from '../itemDetail/ItemDetail';
import Pikachu from './../../assets/img/pikachu.png';
import Murakmi from './../../assets/img/murakami.png';
import Blastoise from './../../assets/img/blastoise.png';
import Gengar from './../../assets/img/gengar.png';
import Cdg from './../../assets/img/cdg.png';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const ItemDetailContainer = () => {
  

  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const db = getFirestore();
  
    const oneItem = doc(db, 'TAPETES', id); // Usamos el id de la URL
    
    getDoc(oneItem).then((snapshot) => {
      const data = snapshot.data();
      setProduct(data);
      
    });
  }, [id]);

  return (
    <div className="today-ItemDetailContainer">
      <ItemDetail producto={product} />
    </div>
  );
};

export default ItemDetailContainer;


// const { id } = useParams();
// const [data, setData] = useState([]);

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

// useEffect(() => {
//   getProductos
//     .then((res) => {
//       setData(res.filter((item) => item.id === parseInt(id)));
//     })
//     .catch((error) => {
//       console.log(error);
//       alert('error');
//     });
// }, []);
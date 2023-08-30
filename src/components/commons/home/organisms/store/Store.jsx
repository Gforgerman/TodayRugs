import React, { useEffect, useState } from 'react';
import TodayLogo from './../../../../../assets/img/Today.png';
import './Store.scss';
import Text from '../../../atoms/text/Text';
import { Button } from '@chakra-ui/react';
import { Link, useParams } from 'react-router-dom';
import Pikachu from './../../../../../assets/img/pikachu.png';
import Murakmi from './../../../../../assets/img/murakami.png';
import Blastoise from './../../../../../assets/img/blastoise.png';
import Gengar from './../../../../../assets/img/gengar.png';
import Cdg from './../../../../../assets/img/cdg.png';
import ItemList from '../../../../itemList/ItemList';

const Store = () => {
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
      // console.log(res);
    })
    .catch((error) => {
      // console.log(error);
      alert('error');
    });
  
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  useEffect(() => {
    if (category) {
      const filtered = todayProducts.filter((product) => product.category === category);
      setFilteredProducts(filtered);
    } else {
      // Si no hay una categoría seleccionada, muestra todos los productos.
      setFilteredProducts(todayProducts);
    }
  }, [category]);

  const firstFourProducts = todayProducts.slice(0, 4);

  return (
    <div className='today-store'>
      <div className="product">
        <ItemList productos={firstFourProducts} />
      </div>
      <div className="store-text">
        <img src={TodayLogo}/>
        <Text tag={'p'}>
        En Today, sabemos que cada hogar es especial. Nuestros tapetes tejidos a mano son detalles únicos que transformarán tu espacio y reflejarán tu estilo.  ¿Listo para transformar tu espacio?.
        </Text>
        <Button colorScheme='whiteAlpha' variant='link'>
          <Link to={'/productos'}>
            <Text tag={'p'} weight={'heavy'}>
                COMIENZA A COMPRAR
            </Text>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Store;
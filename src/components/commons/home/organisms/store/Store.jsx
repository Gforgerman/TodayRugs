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
import { collection, getDocs, getFirestore, limit, query, where } from 'firebase/firestore';
import { database } from '../../../../../main';
import Loader from '../../../atoms/loader/Loader';

const Store = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const {categoriaId} = useParams(); 

  useEffect(() => {        

    const getData = async () => {

      const queryRef = !categoriaId

        ? collection(database, 'TAPETES')

        : query(
          collection(database, 'TAPETES'),
          where('type', '==', categoriaId)
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
    
      }, 1000);
    };

    getData();

  }, [categoriaId]);

  if (loading) {
    return <Loader/>;
  }

  const firstFourProducts = products.slice(0, 4);

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
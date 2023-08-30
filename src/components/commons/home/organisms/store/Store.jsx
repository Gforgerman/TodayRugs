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
import { collection, getDocs, getFirestore, limit, query } from 'firebase/firestore';

const Store = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const db = getFirestore();
    const itemCollections = collection(db, 'TAPETES');
    const limitedQuery = query(itemCollections, limit(4)); // Limitamos la consulta a 4 productos

    getDocs(limitedQuery).then((snapshots) => {
      const docs = snapshots.docs.map((doc) => doc.data());
      setProducts(docs);
    });
  }, []);

  return (
    <div className='today-store'>
      <div className="product">
        <ItemList productos={products} />
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
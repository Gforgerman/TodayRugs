import { Card, Button, StatNumber, Stat } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ItemCount from '../itemCount/ItemCount';
import './Item.scss';
import Text from '../text/Text';

const Item = ({ id, image, name, price, anches, production, categorys }) => {
  return (
    <div className="today-item">
      <Card>
        <img src={image} />
        <div className="textItem">
          <Text tag={'h2'}>{name}</Text>
          <Text tag={'p'}>{anches}</Text>
          <Button colorScheme="blue" variant="link">
            <Link to={`/item/${id}`}>ver más</Link>
          </Button>
          <Stat>
            <StatNumber>${price}</StatNumber>
          </Stat>
        </div>
        <div className="containbtn-item">
          <ItemCount />
          <Button colorScheme="blue">
            <Text tag={'p'} weight={'heavy'}>Agregar</Text>
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Item;

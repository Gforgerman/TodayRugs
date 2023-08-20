import { Card, Button, StatNumber, Stat } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ItemCount from '../itemCount/ItemCount';
import './Item.scss';
import Text from '../text/Text';

const Item = ({ image, name, description, id }) => {
  return (
    <div className="today-item">
      <Card>
        <img src={image} />
        <div className="textItem">
          <Text tag={'h2'}>{name}</Text>
          <Text tag={'p'}>{description}</Text>
          <Button colorScheme="blue" variant="link">
            <Link to={`/item/${id}`}>ver más</Link>
          </Button>
          <Stat>
            <StatNumber>$0,00</StatNumber>
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

import { Card, Button, StatNumber, Stat } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ItemCount from '../itemCount/ItemCount';
import './Item.scss';
import Text from '../text/Text';
import { useShoppingCart } from '../../../../context/ShoppingCartContext';

const Item = ({ id, image, name, price, anches, production, categorys }) => {

  const { addToCart } = useShoppingCart();

  const handleAddToCart = (quantity) => {
    addToCart( image, name, quantity, price);
  };

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
          <ItemCount onAddToCart={handleAddToCart} />
        </div>
      </Card>
    </div>
  );
};

export default Item;

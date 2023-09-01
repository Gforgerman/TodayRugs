import './ItemCount.scss';
import { Button } from '@chakra-ui/react';
import { useState } from 'react';
import Text from '../text/Text';

const ItemCount = ({onAddToCart}) => {
  const [contador, setContador] = useState(0);

  const suma = () => {
    setContador(contador + 1);
  };

  const resta = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  const handleAddToCart = () => {
    onAddToCart(contador); 
  };

  return (
    <div className="today-itemcount">
      <div className="contain-count">
        <Button onClick={resta}>-</Button>
        <p>{contador}</p>
        <Button onClick={suma}>+</Button>
      </div>
      <Button colorScheme="blue" onClick={handleAddToCart}>
        <Text tag={'p'} weight={'heavy'}>Agregar</Text>
      </Button>
    </div>
  );
};

export default ItemCount;

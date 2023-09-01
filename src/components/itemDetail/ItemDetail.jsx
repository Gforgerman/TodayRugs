import { Button, Stat, StatNumber } from '@chakra-ui/react';
import './ItemDetail.scss';
import Item from '../commons/atoms/item/Item';
import Text from '../commons/atoms/text/Text';
import ItemCount from '../commons/atoms/itemCount/ItemCount';
import Loader from '../commons/atoms/loader/Loader';
import { useShoppingCart } from '../../context/ShoppingCartContext';


function ItemDetail({ producto }) {

  const { addToCart } = useShoppingCart();

  const handleAddToCart = (quantity) => {
    addToCart(producto.imagen, producto.nombre, quantity, producto.precio);
  };

  if (!producto) {
    return <Loader/>;
  }

  return (
    <div className="today-itemdetail">
      <div className='contain-itemdetail'>
        <div className="imagen-detail">
          <div className="imagen-detail">
            <img src={producto.imagen} alt={producto.nombre} />
          </div>
        </div>
        <div className="info-detail">
          <div className="infocontain">
            <div>
              <Text tag={'h2'}>{producto.nombre}</Text>
              <Stat>
                <Text tag={'p'}>${producto.precio}</Text>
              </Stat>
            </div>
            <div className="containbtn-item">
              <ItemCount onAddToCart={handleAddToCart} />
            </div>
            <Text tag={'p'} weight={'heavy'}>
            Medidas: {producto.medidas}
            </Text>
            <Text tag={'p'} weight={'heavy'}>
            Tiempo de creación: {producto.creacion} días
            </Text>
            <Text tag={'p'}>
            Fusionamos a la perfección estilo y comodidad. Cada detalle es tejido a mano con pasión y precisión. Creemos en la importancia de crear piezas únicas que transformen tus espacios en algo especial.
            Sabemos que la paciencia es una virtud, y queremos que sepas que tu tapete merece la espera. Nuestro equipo se toma {producto.creacion} días para asegurarse de que cada hilo esté en su lugar.
              <br />
            Personaliza de acuerdo a tu estilo y da un toque único a tu hogar.
              <br />
            ¿Te gustaría cambiar de medidas o un modelo que aún no ves en nuestro catálogo? ¡Ponte en contacto con nosotros para cotizar el diseño que quieres! Haz click aquí para ponerte en contacto.
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;

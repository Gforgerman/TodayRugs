import { Button, Stat, StatNumber } from '@chakra-ui/react';
import Item from '../commons/atoms/item/Item';
import Text from '../commons/atoms/text/Text';
import ItemCount from '../commons/atoms/itemCount/ItemCount';


function ItemDetail({ producto }) {

  if (!producto) {
    return <p>Producto no encontrado.</p>;
  }

  return (
    <div className="today-itemdetail">
      <div className='contain-itemdetail'>
        <div className="imagen-detail">
          <div className="imagen-detail">
            {console.log(producto)} {/* Agregar esta línea */}
            <img src={producto.imagen} alt={producto.nombre} />
          </div>
        </div>
        <div className="info-detail">
          <Text tag={'h2'}>{producto.nombre}</Text>
          <Stat>
            <StatNumber>{producto.precio}</StatNumber>
          </Stat>
          <div className="containbtn-item">
            <ItemCount />
            <Button colorScheme="blue">
              <Text tag={'p'} weight={'heavy'}>Agregar</Text>
            </Button>
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
  );
}

export default ItemDetail;

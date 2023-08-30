import Item from '../commons/atoms/item/Item';
import './ItemList.scss';

const ItemList = ({ productos }) => {
  return (
    <div className="today-ItemList">
      {productos.map((productos) => (
        <Item
          key={productos.id}
          // id={productos.id}
          image={productos.imagen}
          name={productos.nombre}
          price={productos.precio}
          anches={productos.medidas}
          production={productos.creacion}
          catrgory={productos.creacion}
        />
      ))}
    </div>
  );
};

export default ItemList;

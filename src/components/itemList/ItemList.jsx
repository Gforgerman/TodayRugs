import Item from "../item/Item";
import "./ItemList.scss";

const ItemList = ({ productos }) => {
  return (
    <div className="today-ItemList">
      {productos.map((p) => (
        <Item
          key={p.id}
          image={p.imagen}
          name={p.nombre}
          description={p.descripcion}
        />
      ))}
    </div>
  );
};

export default ItemList;

import Item from '../commons/item/Item';

function ItemDetail({ productos }) {
  return (
    <div className="today-itemdetail">
      {productos.map((p) => (
        <Item
          key={p.id}
          image={p.imagen}
          name={p.nombre}
          description={p.descripcion} />
      ))}
    </div>
  );
}

export default ItemDetail;

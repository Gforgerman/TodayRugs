import { useParams } from "react-router-dom";
import Item from "../item/Item";

const ItemDetail = ({ productos }) => {
    const { id } = useParams();
    const filteredProducts = productos.filter((product) => product.id == id);
    return (
        <div className="today-itemdetail">
            {filteredProducts.map((p) => (
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

export default ItemDetail;

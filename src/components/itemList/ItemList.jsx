import React from 'react'
import Item from '../item/Item'

const ItemList = ({ productos }) => {
    return (
        <div className='today-ItemList'>
            {productos.map((p) => (
                <Item
                    key={p.id}
                    name={p.nombre}
                    description={p.descripcion}
                />
            ))}
        </div>
    )
}

export default ItemList
import './ItemListContainer.scss'

const ItemListContainer = ({greeting}) => {
  return (
    <div className='today-ItemListContainer'>
        <div className="contenedoritem">
            <p>{greeting}</p>
        </div>
    </div>
  )
}

export default ItemListContainer
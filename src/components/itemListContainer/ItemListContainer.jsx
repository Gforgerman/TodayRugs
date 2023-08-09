import { useEffect, useState } from 'react';
import Item from '../item/Item'
import './ItemListContainer.scss'

const ItemListContainer = () => {
  const getCharacters = async () => {
    const response = await fetch ("https://rickandmortyapi.com/api/character");
    const data = await response.json();

    return data.results;
  }

  const [characters, setCharacters] = useState([])

  useEffect(() => {
    getCharacters().then((characters) => setCharacters(characters));
  }, [])
  

  return (
    <div className='today-ItemListContainer'>
        <div className="contenedoritem">
          {characters.map((character) => (
            <Item
              key={character.id}
              image={character.image}
              name={character.name}
            />
          ))}
        </div>
    </div>
  )
}

export default ItemListContainer;

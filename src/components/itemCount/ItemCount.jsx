import './ItemCount.scss'
import { Button } from '@chakra-ui/react'
import { useState } from 'react'

const ItemCount = () => {
const [contador, setContador] = useState(0)

const suma =() => {
    setContador(contador + 1)
}

const resta =() => {
    if(contador > 0){
        setContador(contador - 1)
    }
}

  return (
    <div className='today-itemcount'>
        <Button onClick={resta}>menos</Button>
        <p>{contador}</p>
        <Button onClick={suma}>mas</Button>
    </div>
  )
}

export default ItemCount
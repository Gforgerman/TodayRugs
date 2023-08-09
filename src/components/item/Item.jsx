import { Card } from "@chakra-ui/react"
import ItemCount from "../itemCount/ItemCount"


const Item = ({image, name}) => {
  return (
    <div className='today-item'>
      <Card>
        <img src={image} />
        <h2>{name}</h2>
        <ItemCount/>
        </Card>
    </div>
  )
}

export default Item
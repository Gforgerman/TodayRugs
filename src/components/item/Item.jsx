import { Card, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ItemCount from "../itemCount/ItemCount";
import "./Item.scss";

const Item = ({ image, name, description }) => {
  return (
    <div className="today-item">
      <Card>
        <img src={image} />
        <h2>{name}</h2>
        <p>{description}</p>
        <Button colorScheme="blue" variant="link">
          <Link to={`item/${"id"}`}>details</Link>
        </Button>
        <ItemCount />
      </Card>
    </div>
  );
};

export default Item;

import './Navbar.scss';
import { Menu,MenuButton, MenuList,MenuItem, Button} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons';
import TodayLogo from './../../assets/img/Today.png'
import CartWidget from '../cartWidget/CartWidget';
import { useState } from 'react';
import CartProduct from '../cartProduct/CartProduct';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [saludos, setSaludos] = useState(false);

    const handleCartClick = () => {
        setSaludos(!saludos);
    };

  return (
    <div className="today-NavBar">
    <div className="contain">
    <Link to={"/"}><img src={TodayLogo}/></Link>
        <Menu>
         <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
           Modelos disponibles
         </MenuButton>
         <MenuList>
           <MenuItem>60cm x 60cm</MenuItem>
           <MenuItem>1m x 1m</MenuItem>
           <MenuItem>1.2m x 1.2m</MenuItem>
         </MenuList>
    </Menu>
       <Link to={'/cart'}><CartWidget onClick={handleCartClick} /></Link>
            </div>
            {saludos ? <CartProduct greeting={'hola soy el saludo'}/> : null} 
    </div> 
  )
}

export default NavBar
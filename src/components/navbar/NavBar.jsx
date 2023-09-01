import './Navbar.scss';
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import TodayLogo from './../../assets/img/Today.png';
import { Link, useParams } from 'react-router-dom';
import CartWidget from '../commons/atoms/cartWidget/CartWidget';

const NavBar = () => {
  const { categoria } = useParams();
  return (
    <div className="today-NavBar">
      <div className="contain">
        <Link to={'/'}>
          <img src={TodayLogo} />
        </Link>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Modelos disponibles
          </MenuButton>
          <MenuList>
            <MenuItem>
              <Link to={'/productos'}>Todos los productos</Link>
            </MenuItem>
            <MenuItem>
              <Link to={`/category/${'s'}`}>60cm x 60cm</Link>
            </MenuItem>
            <MenuItem>
              <Link to={`/category/${'m'}`}>1m x 1m</Link>
            </MenuItem>
            <MenuItem>
              <Link to={`/category/${'l'}`}>1.2m x 1.2m</Link>
            </MenuItem>
          </MenuList>
        </Menu>
        <Link to={'/cart'}>
          <CartWidget/>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;

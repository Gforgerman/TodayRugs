import "./Navbar.scss";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import TodayLogo from "./../../assets/img/Today.png";
import CartWidget from "../cartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="today-NavBar">
      <div className="contain">
        <Link to={"/"}>
          <img src={TodayLogo} />
        </Link>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Modelos disponibles
          </MenuButton>
          <MenuList>
            <MenuItem>
              <Link to={`/category/${"min"}`}>60cm x 60cm</Link>
            </MenuItem>
            <MenuItem>
              <Link to={`/category/${"mid"}`}>1m x 1m</Link>
            </MenuItem>
            <MenuItem>
              <Link to={`/category/${"max"}`}>1.2m x 1.2m</Link>
            </MenuItem>
          </MenuList>
        </Menu>
        <Link to={"/cart"}>
          <CartWidget />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;

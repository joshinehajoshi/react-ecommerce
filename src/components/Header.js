import React, { useState } from "react";
import '../style/style.css';
import { Navbar, Container, Nav, NavLink } from "react-bootstrap";
import Badge from "@mui/material/Badge";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import cart from './cart.gif';

function Header() {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" style={{height: 60}}>
        <Container>
          <NavLink to="/" className="text-decoration-none text-light mx-3">Add To Cart</NavLink>
          <Nav className="me-auto">
            <NavLink to="/cart" className="text-decoration-none text-light">Home</NavLink>
          </Nav>

          <Badge 
          badgeContent={4} 
          color="primary"
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          
          >
            <i
              class="fa-solid fa-cart-shopping text-light"
              style={{ fontSize: 25, cursor: "pointer" }}
             
            ></i>
          </Badge>
        </Container>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <div className="card_details d-flex justify-content-center align-item-center"
        style={{width: "20rem", padding: 10, position: "relative"}}
        >
          <i className="fa fa-close smallclose"
          style={{position:"absolute", top: 2, right: 20,fontSize: 23, cursor: "pointer"}}
          onClick={handleClose}
          ></i>
          <p style={{fontSize: 22, marginTop: 15, marginBottom: 0}}>
            Your cart is empty
          </p>
          <img 
          src={cart} 
          alt="cart"
          className="emptycart_img"
          style={{width: "5em", padding: 10}}
          />
        </div>
        </Menu>

      </Navbar>
    </>
  );
}

export default Header;

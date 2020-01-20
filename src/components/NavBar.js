import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const Navigation = props => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">
          <img src={props.image}></img>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="#">Find Wellvana Provider</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Patient Resources</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">TeleMedicine</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Pratter.us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Access Plan Info</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Care Management</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;

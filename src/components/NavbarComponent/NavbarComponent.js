import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';


class NavbarComponent extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Kevin Glasow</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/Profile">Profile</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Portfolio">Portfolio</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Contact
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink href="https://github.com/kevinglasow" target="_blank">GitHub</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="https://www.linkedin.com/in/kevinglasow/" target="_blank">Linkedin</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="https://stackoverflow.com/users/9091036/kevin-glasow" target="_blank">Stack Overflow</NavLink>
                  </DropdownItem>
                  {/* <DropdownItem divider /> */}
                  {/* <DropdownItem> */}
                    {/* <NavLink href="/contact">Email Me</NavLink> */}
                  {/* </DropdownItem> */}
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavbarComponent;
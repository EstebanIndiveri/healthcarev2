import React,{Fragment,useContext,useState} from 'react';
import {css } from '@emotion/core';
import {useTheme} from 'emotion-theming';
import Context from '../store/context';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
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
  DropdownItem,
  NavbarText,
  Row,
  Col
} from 'reactstrap';
import Headroom from 'react-headroom';
import './Heading.scss';
// import { Row, Col } from 'reactstrap';





const Heading = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

    const {state,dispatch}=useContext(Context);
    const theme=useTheme()

    const EnlaceHome=styled.a`
    color:"FFF";
    text-align:center;
    text-decoration:none;
    padding-left:2.5rem;
    &:hover{
        cursor:pointer;
        text-decoration:none;
        color:${state.isDark?"white":"#323232"};
    }
`;

    return ( 
    
        <Headroom  style={{transition:'all .3s ease-in'}}>
            <header
            id="head"
            css={css`
            padding:0;
            width:100%;
            border:none;
            background-color:transparent !important;
            `}
            >
                <div>
                    <Navbar color="light" light expand="md">
                        <NavbarBrand href="/">reactstrap</NavbarBrand>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                            <NavLink href="/components/">Components</NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Options
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                Option 1
                                </DropdownItem>
                                <DropdownItem>
                                Option 2
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                Reset
                                </DropdownItem>
                            </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                        <NavbarText>Simple Text</NavbarText>
                        </Collapse>
                    </Navbar>
                </div>
            </header>
        </Headroom>
     );
}
 
export default Heading;
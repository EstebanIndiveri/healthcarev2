import React,{Fragment,useContext,useState} from 'react';
import {css } from '@emotion/core';
import {useTheme} from 'emotion-theming';
import Context from '../../store/context';
// import Helmet from 'react-helmet';
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
  Col,
  Button
} from 'reactstrap';
// import Headroom from 'react-headroom';
import './Heading.scss';

const ButtonSignIn=styled.button`
display:block;
text-align:center;
justify-content:center;
align-items:center;
background: #FFFFFF;
box-shadow: 2px 0px 4px rgba(0, 0, 0, 0.25);
border:none !important;
border-radius: 18px;
color: #323232 !important;
padding:.8rem 1.1rem;
transition:all 500ms ease-in-out;
&:hover{
    box-shadow: 2px 1px 6px rgba(0, 0, 0, 0.5);
}
&:focus{
        outline:none !important;
    }
`;

const ButtonOrange=styled.button`
display:block;
text-align:center;
justify-content:center;
align-items:center;
outline:none;
border:none;
background: rgba(255, 205, 147, 0.58);
box-shadow: 2px 0px 4px rgba(0, 0, 0, 0.25);
border:none !important;
border-radius: 18px;
color: #E49437 !important;
padding:.8rem 1.1rem;
transition:all 500ms ease-in-out;
    &:hover{
    box-shadow: 2px 1px 4px rgba(0, 0, 0, 0.45);
    }
    &:focus{
        outline:none !important;
    }
`;
const DotSpan=styled.span`
color:#8BC9DC;
font-size:2rem ;
font-weight:bold;
`;



const Heading = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

    // const {state,dispatch}=useContext(Context);
    // const theme=useTheme()

 
  


    return ( 
    
        // <Headroom  style={{transition:'all .3s ease-in'}}>
        <header
            // id="head"
            // css={css`
            // padding:0;
            // width:100%;
            // border:none;
            // background-color:transparent !important;
            // `}
        >
            <div>
                <Navbar id="nave" className="navbarcomponent" color="light" light expand="md">
                    <NavbarBrand className="port-navbar-brand logo" href="/">
                        Daniel Indiveri <DotSpan>.</DotSpan>
                    </NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem className="port-navbar-item blog" >
                            <NavLink className="nav-link port-navbar-link" href="#">About</NavLink>
                        </NavItem>

                        <NavItem className="port-navbar-item">
                            <NavLink className="nav-link port-navbar-link" href="#servicios">Services</NavLink>
                        </NavItem>

                        <NavItem className="port-navbar-item">
                            <NavLink className="nav-link port-navbar-link" href="#">Blog</NavLink>
                        </NavItem>

                        <NavItem className="port-navbar-item">
                            <NavLink className="nav-link port-navbar-link" href="#contact">Contacts</NavLink>
                        </NavItem>

                        <NavItem className="port-navbar-item">
                                <ButtonSignIn outline color="warning" color="secondary" onClick={()=>alert('comming soon')}>Sign In</ButtonSignIn>
                        </NavItem>

                        <NavItem className="port-navbar-item">
                                <ButtonOrange Button className="text-white" color="warning">Log In</ButtonOrange>
                        </NavItem>

                        </Nav>
                            </Collapse>
                </Navbar>
            </div>
        </header>
        // </Headroom>
     );
}
 
export default Heading;
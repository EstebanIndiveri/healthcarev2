import React,{Fragment,useContext,useState} from 'react';
import {css } from '@emotion/core';
import {useTheme} from 'emotion-theming';
import Context from '../../store/context';
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
// import Headroom from 'react-headroom';
import './Heading.scss';
import Button from 'reactstrap/lib/Button';
// import { Row, Col } from 'reactstrap';


function BsNavLink(props){
    return(
    //   <ActiveLink activeClassName="active" route={route}>
        <a className="nav-link port-navbar-link"></a>
    //   </ActiveLink>
        // <Link href={route}><a className="nav-link port-navbar-link">{title}</a></Link>
    )
  }


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
    const DotSpan=styled.span`
    color:#8BC9DC;
    font-size:2rem ;
    font-weight:bold;
    `;

    // lOGIN & LOGOUT
    const Login=()=>{
            console.log('login');
        // <span onClick={auth0.login} className="nav-link port-navbar-link clickable">Login</span>
    }
    
    const Logout=()=>{
            console.log('logout');
        // <span onClick={auth0.logout} className="nav-link port-navbar-link clickable">Logout</span>
    }
    


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
                    <Navbar className="port-navbar port-nav-base absolute blog" color="light" light expand="md">
                        <NavbarBrand className="port-navbar-brand" href="/">Dr.Indiveri <DotSpan>.</DotSpan></NavbarBrand>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
            <NavItem className="port-navbar-item blog" >
            <NavLink className="nav-link port-navbar-link" href="#">Components</NavLink>
            </NavItem>
            <NavItem className="port-navbar-item">
                <NavLink className="nav-link port-navbar-link" href="#">Components</NavLink>
            
            </NavItem>
            <NavItem className="port-navbar-item">
            <NavLink className="nav-link port-navbar-link" href="#">Components</NavLink>

            </NavItem>
            
            <NavItem className="port-navbar-item">
            <NavLink className="nav-link port-navbar-link" href="#">Components</NavLink>
            </NavItem>

            <NavLink className="nav-link port-navbar-link" href="#">
                <Button outline color="warning" color="secondary">Sign In</Button>
            </NavLink>
            
            <NavLink className="nav-link port-navbar-link" href="#">
                <Button className="text-white" color="warning">Log In</Button>
            </NavLink>
           
                        </Nav>
                        </Collapse>
                    </Navbar>
                </div>
            </header>
        // </Headroom>
     );
}
 
export default Heading;
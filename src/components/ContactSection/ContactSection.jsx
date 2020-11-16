import React,{useState} from 'react'
import styled from '@emotion/styled';
import SocialLinks from '../SocialLinks/SocialLinks';
import { Collapse, Button, CardBody, Card,Col,Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt,faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import MapBox from '../MapBox';


import './ContactSection.scss';

const Title=styled.h1`
    font-size:2.3rem;
    margin:0;
    padding:0;
    color:#8BC9DC;
`;

const Label=styled.label`
    color:#8BC9DC;
    font-weight:500;
`;

const Input=styled.input`
border-color:#8BC9DC;
transition:box-shadow 300ms ease-in-out;
&:focus{
    border:none;
    box-shadow:0px 0px 5px #f8dede !important;
}
`;
const TextArea=styled.textarea`
border-color:#8BC9DC;

&:focus{
    border:none;
    box-shadow:0px 0px 5px #f8dede !important;
}
`;

const ButtonSubmit=styled.button`
    border:1px solid #8BC9DC;
    color:#8f8f8f;
    transition:background-color 300ms ease-in-out;
    border-radius:10px;
    &:focus{
        outline:none;
    }
    &:hover{
        background-color:#8BC9DC;
        color:white;
    }
`;
const Div=styled.div`
margin-right:2px;
border:1px solid #8BC9DC;
padding:1rem;
font-size:1.4rem;
cursor:pointer;
transition:background-color 300ms ease-in-out;
border-radius:10px;
color:#c0c0c0;

&:hover{
    background-color:#8BC9DC;
    color:#dadada;
}
`;

const ContactSection = () => {

const [isOpen, setIsOpen] = useState(false);

const [isRectaOpen,setIsRectaOpen]=useState(false);

const toggleRecta=()=>setIsRectaOpen(!isRectaOpen);
const toggle = () => setIsOpen(!isOpen);

    return ( 
        <Row>
        {/* <Title title="Contact us"/> */}
        <Col xs="12" lg="5" md="5">
            <Title>Contacte conmigo</Title>
        <section  className="contact py-5">
        <div className="ml-3 ">
            <form
                action="https://formspree.io/f/mnqozzkn"
                method="POST"
                >
                <div className="form-group">
                    <Label htmlFor="name">Nombre</Label>
                    <Input type="text" className="form-control" name="name" id="name" placeholder="Ingrese su nombre" required/> 
                </div>

                <div className="form-group">
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" className="form-control" name="email" id="email" placeholder="correo@example.com" required/> 
                </div>

                <div className="form-group">
                    <Label htmlFor="description">Consulta</Label>
                    <TextArea name="description" id="description" className="form-control" rows="5" placeholder="Su mensaje aquí..."/>
                </div>

                <ButtonSubmit type="submit" className="btn btn-yellow btn-block text-capitalize mt-5">Enviar</ButtonSubmit>
            </form>
        </div>
        </section>
        </Col>
        <Col xs="12" lg="7" md="7">
        <Title>Lugares de trabajo</Title>
            <div className="text-center mx-auto text-decoration-none">
                    <div className="mt-5">
                        <Div  onClick={toggle} >Centro Medico CEOM</Div>
                        <Collapse isOpen={isOpen}>
                            <Card>
                            <CardBody styled={{height:'100%'}}>
                            <p><FontAwesomeIcon icon={faMapMarkerAlt} color="#d88564" style={{fontSize:"22px"}} />
                            &nbsp; Dirección: Rondeau 293 1°Piso Nueva Córdoba</p>
                            
                            <p><FontAwesomeIcon icon={faWhatsapp} color="#ace296" style={{fontSize:"22px"}} />
                            &nbsp; Telefono: (0351) 152129803</p>
                            <p><FontAwesomeIcon icon={faEnvelope} color="#cacaca" style={{fontSize:"20px"}} /> &nbsp; Email: ceom.srl.01@gmail.com</p>
                            <p><a href="https://es-la.facebook.com/CEOM-SRL-312346205528011/">Facebook: CEOM SRL</a></p>
                            </CardBody>
                            </Card>
                        </Collapse>
                        
                        
                    </div>
                   
                    <div className="mt-4">
                        <Div  onClick={toggleRecta} >Consultorios de la Recta</Div>
                        <Collapse isOpen={isRectaOpen}>
                            <Card>
                            <CardBody>
                            <p><FontAwesomeIcon icon={faMapMarkerAlt} color="#d88564" style={{fontSize:"22px"}} />
                            &nbsp; Dirección: Juan Nepper 6079 B°, Villa Belgrano, Córdoba</p> 
                            <p><FontAwesomeIcon icon={faWhatsapp} color="#ace296" style={{fontSize:"22px"}} />
                            &nbsp; Telefono:(03543) 420854 | 420004</p>
                           <p><a href="https://www.consultoriosrecta.com.ar" target="_blank"> www.consultoriosrecta.com.ar</a></p>
                            </CardBody>
                            </Card>
                        </Collapse>
                    </div>
            </div>
   
            <div className="mt-4" >
            <SocialLinks size={24}/>
            </div>
        </Col>
        
                            <div className="w-100 mx-auto">
                        <MapBox/>
                        </div>
        </Row>
        
     );
}
 
export default ContactSection;
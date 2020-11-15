import React, { Fragment } from 'react'
import {Col} from 'reactstrap';
import styled from '@emotion/styled';
import {css} from '@emotion/core';
import './CardVisual.scss';
import Row from 'reactstrap/lib/Row';
import CircleBlue from '../../imgs/uxkit/cancelRecurso2.png';
import Elipse from '../../imgs/uxkit/todojunto.png';
import { Parallax } from 'react-scroll-parallax';
import Container from 'reactstrap/lib/Container';
import SocialLinks from '../SocialLinks/SocialLinks';


const Carta= styled.div`
height:340px;
width:320px;
background-color:white;
box-shadow:0px 7px 26px 5px rgb(184 184 184 / 15%);
border-radius:20px;
margin:0 auto;
margin-top:3rem;
@media(max-width:992px){
    display:none;
}
`;
const Title=styled.h5`
/* text-align:center; */
/* font-family:'Montserrat' !important; */
/* font-size:1.4rem; */
padding-top:1.6rem !important;
`;

const CircleContainer=styled.div`
padding-top:1.4rem !important;
margin-left:0 auto !important;
justify-content:center;
align-items:center;
text-align:center;
`;
const Circle=styled.img`
height:40px;
width:40px;
`;
const Elipsis=styled.div`
background-image:url(${Elipse});
background-size:contain;
height:400px;
width:100%;
background-position:center;
background-repeat:no-repeat;
z-index:-999;
position:absolute;
margin:0 !important;
padding:0 !important;
top: 390px;
left: 0;


@media(max-width:1015px){
    top:480px;
}

@media(max-width:1000px){
    display:none;
}
`;

const TextoContainer=styled.div`

text-align:justify;
padding-left:1rem;
padding-right:1rem;
margin-top:10px;
margin-bottom:10px;
max-width:100%;
`;


const CardVisual = () => {


    return ( 
              
        <Fragment>

                    <Elipsis></Elipsis>
                    <Parallax className="custom-class" y={[-15, 80]} tagOuter="figure">

                <Carta >
                    <Row>
                        <Col xs="4">
                        <CircleContainer>
                            <Circle src={CircleBlue} alt="" srcset=""/>
                        </CircleContainer>                        
                        </Col>
                        <Col xs="8">
                        <Title >Daniel Indiveri</Title>               
                        </Col>
                    </Row>
                        <Row xs="12">
                        <Col xs="12">
                            <TextoContainer>

                            <p className="text-left font-weight-bold">Bienvenido!</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In quam adipisci ut enim sint quibusdam illum numquam? Mollitia praesentium optio nam voluptate harum totam qui eveniet distinctio,  </p>
                            <SocialLinks/>

                            </TextoContainer>    

                            </Col>
                        </Row>
                </Carta>
        </Parallax>
      </Fragment>
    );
}
 
export default CardVisual;
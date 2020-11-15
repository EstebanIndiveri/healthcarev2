import React, { Fragment } from 'react'
import {Col} from 'reactstrap';
import styled from '@emotion/styled';
import {css} from '@emotion/core';
import './CardVisual.scss';
import Row from 'reactstrap/lib/Row';
import CircleBlue from '../../imgs/uxkit/cancelRecurso1.png';

const Carta= styled.div`
height:340px;
width:320px;
background-color:white;
box-shadow:0px 7px 26px 5px rgb(184 184 184 / 15%);
border-radius:20px;
margin:0 auto;
margin-top:3rem;
`;
const Title=styled.h5`
/* text-align:center; */
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
`

const CardVisual = () => {


    return ( 
              
        <Fragment>
           
        
                <Carta >
                    <Row>
                        <Col xs="4">
                        <CircleContainer>
                            <Circle src={CircleBlue} alt="" srcset=""/>
                        </CircleContainer>                        
                        </Col>
                        <Col xs="8">
                        <Title >Mr.sven</Title>                
                        </Col>

                    </Row>
                </Carta>
           
      </Fragment>
    );
}
 
export default CardVisual;
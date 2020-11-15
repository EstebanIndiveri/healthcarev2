import React,{ Fragment} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import ServicesOffered from '../ServicesOffered/ServicesOffered';
import SintaxDes from '../SintaxDes';
import CardVisual from '../CardVisual/CardVisual';
import PrincipalCol from '../PrincipalCol';

const HomeScreen = () => {


    const scroll = (component) => {
        if(component){
            const section = document.querySelector( component );
            if(section){
                section.scrollIntoView( { behavior: 'smooth' } );


                const ready=document.querySelector(component);
                ready.classList.add('animate__fadeIn','animate__slower');

                setTimeout(() => {
                    ready.classList.remove( 'animate__fadeIn','animate__slower')
                }, 3000);
            }
        };
      };

    return ( 
        <Fragment>
            <div style={{height:'90vh',zIndex:'1'}}>
                
                <Container style={{maxWidth:"100vw",overflowX:'hidden'}}>
                    <Row lg="12" css={css`display:flex;`} className="animate__animated animate__fadeIn">
                        <Col lg="6" md="12" sm="12" css={css`@media(max-width:1000px){height:100vh;}`}>
                            <PrincipalCol/>
                        </Col>
                
                    
                    {/* segunda columna animate__animated animate__fadeInLeft animate__delay-3s */}

                    <Col lg="6" style={{paddingRight:'0',paddingTop:'10px'}}>
                    <div>
                            <div css={css` background-position:center; height:70vh; background-image:url('../FamilyValueshappy.png');background-position:center;background-size:contain;background-repeat:no-repeat; @media(max-width:1000px){
                                display:none;
                            }`}></div>
                        </div>

                            {/* Description text */}

                        </Col>
                        
                    </Row>
                    <Row  >
                        <Col id="servicios"  className="animate__animated h-100 p-0 m-0 mt-5 mb-3 pt-3 col-12 text-center clearfix">
                            
                            <ServicesOffered/>

                        </Col>
                    </Row>
                </Container>
            </div>
        </Fragment>
     );
}
 
export default HomeScreen;
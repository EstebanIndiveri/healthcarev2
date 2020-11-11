import React,{ Fragment} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Parallax } from 'react-scroll-parallax';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons'


const PresentationDesc=styled.div`
    padding:4em;
    padding-bottom:1rem;
    justify-content:center;
`;
const Description=styled.div`
font-size:5rem;
font-weight:700;
line-height:1.1;
@media(max-width:1000px){
        font-size:2.3rem;
        text-align:justify;
        padding-bottom:2rem;
      
    }
`;

const ButtonOrange=styled.button`
display:block;
text-align:center;
justify-content:center;
align-items:center;
border:none;
background: #FBA43F;
border-radius: 15px;
color:white;
/* width:3rem; */
/* height:1rem; */
padding:.9rem 1.8rem;
/* padding-left:1.3rem;
padding-right:1.3rem; */

`;

const HomeScreen = () => {


    const scroll = (component) => {
        if(component){
            const section = document.querySelector( component );
            if(section){
                section.scrollIntoView( { behavior: 'smooth', block: 'start' } );


                const ready=document.querySelector(component);
                ready.classList.add('animate__flipInX');

            }
        };
      };

    return ( 
        <Fragment>
            <div style={{height:'100vh',zIndex:'1'}}>
            <Container style={{maxWidth:"100vw",overflowX:'hidden'}}>
                <Row lg="12" css={css`display:flex;`} className="animate__animated animate__fadeIn">
                    <Col lg="6" md="12" sm="12" css={css`@media(max-width:1000px){
                        height:100vh;
                    }`}>
                    <Parallax className="custom-class" y={[-25, 25]} tagOuter="figure">
                        <PresentationDesc>
                            <Description className="text-center nimate__animated animate__fadeInLeft animate__delay-1s">
                                Dr.Indiveri<FontAwesomeIcon icon={faHome} color="#8BC9DC" style={{fontSize:"24px"}} size="xs"/>
                            </Description>
                            <p className="text-center animate__animated animate__fadeInLeft animate__delay-2s">Medico Pediatra</p>
                        </PresentationDesc>
                            
                            <Col css={css`@media(max-width:1000px){justify-content:center !important;padding-left:0 !important;}`} md="12" id="btnCol" style={{alignContent:"center",justifyContent:"center",alignItems:"center",display:"flex",paddingBottom:'3rem',paddingTop:'10px',marginTop:'0'}} className="animate__animated animate__fadeIn">
                            <ButtonOrange > <span> Start</span></ButtonOrange>
                            </Col>
                            {/* className="animate__animated animate__fadeInLeft animate__delay-3s " */}
                           
                        </Parallax>
                    </Col>
                <Col lg="6" style={{paddingRight:'0',paddingTop:'10px'}}>
                    <div>
                        <div css={css` background-position:center; height:80vh; background-image:url('../FamilyValueshappy.png');background-position:center;background-size:contain;background-repeat:no-repeat; @media(max-width:1000px){
                            display:none;
                        }`}></div>
                    </div>
                    </Col>
                </Row>
                
               
            </Container>
        </div>
            </Fragment>
     );
}
 
export default HomeScreen;
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
h1{
    font-size:6.07rem;
    padding:0;
    margin:0;
}
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
border-radius: 18px;
color:white;
padding:.9rem 1.8rem;
transition:all 500ms ease-in-out;
&:hover{
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
}
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
            <div style={{height:'90vh',zIndex:'1'}}>
                
            <Container style={{maxWidth:"100vw",overflowX:'hidden'}}>
                <Row lg="12" css={css`display:flex;
                /* height: 91vh; */
                `} className="animate__animated animate__fadeIn">
                    
                    <Col lg="6" md="12" sm="12" css={css`@media(max-width:1000px){
                        height:100vh;
                    }`}>
                       
                    <Parallax className="custom-class" y={[-25, 25]} tagOuter="figure">
                        <PresentationDesc>
                            <Description className="text-center animate__animated animate__fadeInLeft animate__delay-1s">
                                <h1>Dr.Indiveri<FontAwesomeIcon icon={faHome} color="#8BC9DC" style={{fontSize:"24px"}} size="xs"/></h1>
                            </Description>
                            <p className="text-center animate__animated animate__fadeInLeft animate__delay-2s">More than just a medic for you and your family</p>
                        </PresentationDesc>
                            
                            <Col css={css`@media(max-width:1000px){justify-content:center !important;padding-left:0 !important;}`} md="12" id="btnCol" style={{alignContent:"center",justifyContent:"center",alignItems:"center",display:"flex",paddingBottom:'3rem',paddingTop:'10px',marginTop:'0'}} >
                            <ButtonOrange className="text-center animate__animated animate__fadeIn animate__delay-3s"> <span> Start</span></ButtonOrange>
                            </Col>
                            {/* className="animate__animated animate__fadeInLeft animate__delay-3s " */}
                            <Col>
                                <div css={css`
                                width: 250px;
                                height: 250px;
                                border-radius:100%;
                                opacity:.5;
                                background: #FCE9E9;`}>
                          
                              </div>
                          </Col>
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
               
               {/* <Row>
                   <Col css={css`height:100vh;width:100vw;padding:0;background-color:red;`}>
                   <ParallaxMousemove containerStyle={style.outter} fullHeight={true}>
          <ParallaxMousemove.Layer layerStyle={style.bgLayerStyle} config={{
              xFactor: 0.1,
              yFactor: 0,
              springSettings: {
                stiffness: 50,
                damping: 30
              }
            }}>
            <img src={require('../../imgs/bg4.png')} alt="Parallax Layer"></img>
          </ParallaxMousemove.Layer>
          <ParallaxMousemove.Layer layerStyle={style.bgLayerStyle} config={{
              xFactor: 0.1,
              yFactor: 0,
              springSettings: {
                stiffness: 50,
                damping: 30
              }
            }}>
            <img src={require('../../imgs/bg5.png')} alt="Parallax Layer"></img>
          </ParallaxMousemove.Layer>
          <ParallaxMousemove.Layer layerStyle={style.bgLayerStyle} config={{
              xFactor: 0.1,
              yFactor: 0.025,
              springSettings: {
                stiffness: 50,
                damping: 30
              }
            }}>
            <img src={require('../../imgs/bg7.png')} alt="Parallax Layer"></img>
          </ParallaxMousemove.Layer>
          <ParallaxMousemove.Layer layerStyle={style.bgLayerStyle} config={{
              xFactor: 0.1,
              yFactor: 0.05,
              springSettings: {
                stiffness: 50,
                damping: 30
              }
            }}>
            <img src={require('../../imgs/bg6.png')} alt="Parallax Layer"></img>
          </ParallaxMousemove.Layer>
          <div style={style.inner}>
            <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                xFactor: 0.1,
                yFactor: 0,
                springSettings: {
                  stiffness: 50,
                  damping: 30
                }
              }}>
              <img src={require('../../imgs/bg1.png')} alt="Parallax Layer"></img>
            </ParallaxMousemove.Layer>
            <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                xFactor: 0.08,
                yFactor: 0,
                springSettings: {
                  stiffness: 50,
                  damping: 30
                }
              }}>
              <img src={require('../../imgs/bg2.png')} alt="Parallax Layer"></img>
            </ParallaxMousemove.Layer>
            <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                xFactor: 0.05,
                yFactor: 0,
                springSettings: {
                  stiffness: 50,
                  damping: 30
                }
              }}>
              <img src={require('../../imgs/bg3.png')} alt="Parallax Layer"></img>
            </ParallaxMousemove.Layer>
            <h1 style={style.header}>REACT-PARALLAX-MOUSEMOVE</h1>
            <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                xFactor: 0.01,
                yFactor: 0,
                springSettings: {
                  stiffness: 50,
                  damping: 30
                }
              }}>
            <p style={style.paragraph}>A simple react component for creating a parallax effect connected to the mousemove event.</p>
            </ParallaxMousemove.Layer>
            <a href="https://www.npmjs.com/package/react-parallax-mousemove" style={style.button}>npm install react-parallax-mousemove --save</a>
          </div>
        </ParallaxMousemove>
                   </Col>
               </Row> */}
            </Container>
        </div>
            </Fragment>
     );
}
 
export default HomeScreen;
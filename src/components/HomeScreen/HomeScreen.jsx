import React,{ Fragment} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import ServicesOffered from '../ServicesOffered/ServicesOffered';
import SintaxDes from '../SintaxDes';
import CardVisual from '../CardVisual/CardVisual';
import PrincipalCol from '../PrincipalCol';
import ButtonPills from '../ButtonPills/ButtonPills';
import DescriptionText from '../DescriptionText/DescriptionText';
import CardCarousel from '../CardCarousel';
import ContactSection from '../ContactSection/ContactSection';
import Dates from '../Dates/Dates';
// import Dates from '../Dates/Dates.js';

const Clear=styled.div`
@media(max-width:525px){
    margin:4rem !important;
}
@media(max-width:404px){
    margin:5rem !important;
}
@media(max-width:340px){
    margin:6rem !important;
}
`

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
                    <Row lg="12" css={css``} className="animate__animated animate__fadeIn">
                        <Col lg="6" md="12" sm="12" css={css`@media(max-width:1000px){height:100vh;}`}>
                            <PrincipalCol/>
                     
                            <CardVisual/>
                            
                        </Col>
                        
                    {/* segunda columna animate__animated animate__fadeInLeft animate__delay-3s */}
                        <Col lg="6" md="12" sm="12" style={{paddingRight:'0',paddingTop:'10px'}}>
                            
                                <div css={css` background-position:center; height:70vh; background-image:url('../FamilyValueshappy.png');background-position:center;background-size:contain;background-repeat:no-repeat; @media(max-width:1000px){
                                display:none;
                                }`}></div>
                           
                                <ButtonPills/>
                            {/* Description text */}
                           
                           <DescriptionText/> 
                        </Col>
                        
                    </Row>
                    <Clear className="clearfix m-3 p-3"></Clear>
                    <Row>
                        <Col id="servicios"  className="animate__animated p-0 m-0 mt-5 mb-3 pt-3 col-12 text-center clearfix">
                            <ServicesOffered/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <div css={css`height:100vh`}>
                        <CardCarousel/>
                        </div>
                        </Col>
                    </Row>
                    <Row>
                    <Col id="contact" className="animate__animated p-0 m-0 mt-5 mb-3 pt-3 col-12 text-center">
                    
                    <ContactSection/>

                    </Col>
                    </Row>
                  
                </Container>
            </div>
        </Fragment>
     );
}
 
export default HomeScreen;
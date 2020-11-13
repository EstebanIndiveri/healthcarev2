import React,{ Fragment} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Parallax } from 'react-scroll-parallax';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons'

const BarraTitle=styled.div`
background-position:center;
background-size:cover;
background-repeat:no-repeat;
/* height:100px; */
width:100%;
padding-bottom:1rem;
`;

const PresentationDesc=styled.div`
    padding:4em;
    padding-top:3em;
    margin-top:8rem;
    padding-bottom:0;
    justify-content:center;
    
    p{
        font-weight:lighter !important;
        width:50%;
        margin:0 auto;
        padding-bottom:.4rem;
    }
`;
const Description=styled.div`
/* font-size:5rem; */
font-weight:700;
line-height:1.1;
padding-bottom:0px;
h1{
    font-size:6.07rem;
    padding:0;
    margin:0;
    @media(max-width:1200px){
        font-size:4.3rem;
    }
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
/* margin-right:4rem; */

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
                                <h1 style={{padding:'0 !important',margin:'0 !important'}}>Dr.Indiveri<FontAwesomeIcon icon={faHome} color="#8BC9DC" style={{fontSize:"24px"}} size="xs"/></h1>
                                <BarraTitle> 
                                    <img src={require('../../imgs/uxkit/Rectangle7.png')} alt="" srcset=""/>
                                </BarraTitle>
                            </Description>
                            <p className="text-center animate__animated animate__fadeInLeft animate__delay-2s">More than just a medic for you and your family</p>
                        </PresentationDesc>
                            
                            <Col css={css`@media(max-width:1000px){justify-content:center !important;padding-left:0 !important;}`} md="12" id="btnCol" style={{alignContent:"center",justifyContent:"center",alignItems:"center",marginBottom:'1.7rem',display:"flex",paddingTop:'10px',marginTop:'0'}} >
                            <ButtonOrange className="text-center animate__animated animate__fadeIn animate__delay-3s"> <span> Start</span></ButtonOrange>
                            </Col>
                            {/* className="animate__animated animate__fadeInLeft animate__delay-3s " */}
                            <Col>
                                <div css={css`
                                height: 300px;
                                margin: 0 auto;
                                width: 100%;
                                justify-content: center;
                                align-items: center;
                                text-align: center;
                                `}>
                                <img height="400px" width="400px" src={require('../../imgs/uxkit/Ellipse4.png')} alt="" srcset=""/>
                                </div>
                                {/* blue heart */}
                                <div style={{position:'absolute',top:'50px',left:'95px'}}>
                                    <img height="27px" width="27px" src={require('../../imgs/uxkit/emojione_blue-heart.png')} alt=""/>
                                </div>
                                {/* second blue heart emojione_blue-heart-2*/}
                                <div style={{position:'absolute',top:'1px',left:'430px'}}>
                                    <img height="23px" width="23px" src={require('../../imgs/uxkit/emojione_blue-heart.png')} alt=""/>
                                </div>

                                {/* three pink heart */}

                                <div style={{position:'absolute',top:'180px',left:'510px'}}>
                                    <img height="23px" width="23px" src={require('../../imgs/uxkit/emojione_blue-heart-1.png')} alt=""/>
                                </div>

                                <div style={{position:'absolute',top:'150px',left:'120px'}}>
                                    <img height="100%" width="100%" src={require('../../imgs/uxkit/Ellipse6.png')} alt=""/>
                                </div>

                                <div style={{position:'absolute',top:'180px',left:'460px'}}>
                                    <img height="100%" width="100%" src={require('../../imgs/uxkit/Ellipse6.png')} alt=""/>
                                </div>

                                <div className="" style={{top:'-250px',left:'9.2rem' ,height: '340px',width: '290px',backgroundColor:'white', boxShadow:'0px 7px 26px 5px rgba(0, 0, 0, 0.30)',position:'relative', zIndex:'999',borderRadius:'20px',}}>
                                    <div style={{background:'red',boxShadow:'0px 7px 26px 5px rgba(0, 0, 0, 0.30)' ,borderRadius:'100%', height:'50px',width:'50px',top:'20px',left:'30px',position:'relative',display:'flex'}}>
                                    <div
                                    style={{background:'#FFF', borderRadius:'100%', height:'35px',width:'35px',margin:'0 auto',justifyContent:'center',alignItems:'center',alignSelf:'center',display:'flex'}}>
                                        <span style={{fontSize:'10px',textAlign:'center',justifyContent:'center',margin:'0 auto',alignContent:'center',alignSelf:'center',position:'inherit'}}>70%</span>
                                    </div>
                                    </div>
                                    <div className=" w-100" css={
                                        css`
                                        position:inherit;
                                        padding-left:1rem;
                                        top:27px;
                                        font-weight:bold;
                                        font-family:'Fira Sans' !important;
                                        letter-spacing: 3px;
                                        `}>
                                        Dr.Daniel
                                    </div>
                                    {/* corazones */}
                                    <div></div>
                                    <div></div>
                                    <div></div>

                                </div>
                          </Col>
                        </Parallax>
                     
                    </Col>
            
                 
                  {/* segunda columna animate__animated animate__fadeInLeft animate__delay-3s */}

                <Col lg="6" style={{paddingRight:'0',paddingTop:'10px'}}>
                    <div>
                        <div css={css` background-position:center; height:70vh; background-image:url('../FamilyValueshappy.png');background-position:center;background-size:contain;background-repeat:no-repeat; @media(max-width:1000px){
                            display:none;
                        }`}></div>
                    </div>

                    <div style={{background:'#FFF2E2', width:'60px',height:'60px',top:'450px',position:'absolute',borderRadius:'20px'}}>
                        <div style={{margin:'0 auto',justifyContent:'center',alignContent:'center',alignItems:'center',paddingTop:'15px'}} 
                            css={
                            css`
                                transition:all 300ms ease-in-out;
                                &:hover{
                                    transform:scale(1.1) rotate(3deg) ;
                                }
                            `}

                            >
                            <img height="100%" width="100%" src={require('../../imgs/uxkit/pills2-1.png')} alt=""/>
                        </div>
                    </div>
                    <div style={{width:'42%', left:'80px',marginTop:'15px',position:'absolute'}}>
                        <p style={{alignContent:'center',textAlign:'left',fontSize: '13px'}}>Check your test <span style={{color:'#8BC9DC',fontWeight:'bold'}}>result</span> and discuss with your doctor</p>
                    </div>
                    <div style={{height:'25px',width:'25px',marginTop:'75px',left:'35px' ,position:'absolute'}}
                        css={css`
                        transition:all 300ms ease-in-out;
                        &:hover{
                            transform:translateY(2px)
                        }    
                        `
                        }
                    >
                        <img height="100%" width="100%" src={require('../../imgs/uxkit/arrow.png')} alt=""/>

                    </div>
                    </Col>
                    
                </Row>
            
            </Container>
        </div>
            </Fragment>
     );
}
 
export default HomeScreen;
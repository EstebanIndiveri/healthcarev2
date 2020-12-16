import styled from '@emotion/styled';
import React, { Fragment } from 'react'
import { Parallax } from 'react-scroll-parallax';
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';

import './PrincipalCol.scss';
import CardVisual from '../CardVisual/CardVisual';

const PresentationDesc=styled.div`
    padding:4em;
    padding-top:3em;
    margin-top:5rem;
    padding-bottom:0;
    justify-content:center;
    
    p{
        font-weight:lighter !important;
        width:50%;
        margin:0 auto;
        padding-bottom:.4rem;
        @media(max-width:440px){
            width:100%;
            font-size:.8rem;
        }
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
            @media(max-width:510px){
                font-size:3rem;
            }
            @media(max-width:410px){
                font-size:2.3rem;
            }
            svg{
                    font-size:15px !important;                    
            }
        }
@media(max-width:1000px){
        font-size:2.3rem;
        text-align:justify;
        padding-bottom:2rem;
      
    }
    
`;

const BarraTitle=styled.div`
background-position:center;
background-size:cover;
background-repeat:no-repeat;
/* height:100px; */
width:100%;
padding-bottom:1rem;
`;
const ButtonOrange=styled.button`
display:block;
text-align:center;
justify-content:center;
align-items:center;
border:none;
/* background: #FBA43F; */
background: #ffcd93;
margin:0 auto;


border-radius: 18px;
color:white;
padding:.9rem 1.8rem;
transition:all 500ms ease-in-out;
/* margin-right:4rem; */

a{
color:white;
text-decoration:none;
}
&:hover{
  box-shadow: 2px 1px 4px rgba(0, 0, 0, 0.25);
}
&:focus{
        outline:none !important;
    }
`;

const PrincipalCol = () => {

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
        {/* <Parallax className="custom-class" y={[-25, 25]} tagOuter="figure"> */}

        <PresentationDesc>
            <Description className="text-center animate__animated animate__fadeInLeft animate__delay-1s">
                <h1 style={{padding:'0 !important',margin:'0 !important'}}>Dr.Indiveri<FontAwesomeIcon icon={faHome} color="#8BC9DC" style={{fontSize:"24px"}} size="xs"/></h1>
                <BarraTitle> 
                    <img src={require('../../imgs/uxkit/Rectangle7.png')} alt="" srcset=""/>
                </BarraTitle>
            </Description>
            <p className="text-center animate__animated animate__fadeInLeft animate__delay-2s">More than just a medic for you and your family</p>
        </PresentationDesc>
          {/* /* aquí iria el card */}
          <ButtonOrange className="text-center animate__animated animate__fadeIn animate__delay-3s" onClick={()=>scroll('#descriptionText')} ><span> Start</span>
                </ButtonOrange>
            {/* <CardVisual/> */}
            {/* </Parallax> */}

        </Fragment>
     );
}
 
export default PrincipalCol;
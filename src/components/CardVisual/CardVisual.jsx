import React, { Fragment } from 'react'
import {Col} from 'reactstrap';
import styled from '@emotion/styled';
import {css} from '@emotion/core';
import './CardVisual.scss';


const ButtonOrange=styled.button`
display:block;
text-align:center;
justify-content:center;
align-items:center;
border:none;
/* background: #FBA43F; */
background: #ffcd93;


border-radius: 18px;
color:white;
padding:.9rem 1.8rem;
transition:all 500ms ease-in-out;
/* margin-right:4rem; */

&:hover{
  box-shadow: 2px 1px 4px rgba(0, 0, 0, 0.25);
}
`;

const CardVisual = () => {


    return ( 
              
        <Fragment>
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
            </div>
           
      </Col>
      </Fragment>
    );
}
 
export default CardVisual;
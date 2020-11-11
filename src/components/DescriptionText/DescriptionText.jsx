import React from 'react'
import {Container,Row,Col} from 'reactstrap';
import styled from '@emotion/styled';


export const SpanPink=styled.span`
color:#af235d;
`;
export const Description=styled.div`
    font-size: 2rem;
    text-align:center;
    font-weight: bold;
    line-height:1.2; 
    position: relative;
    width:50%;
    margin:0 auto;
    @media(max-width:1000px){
        font-size:1.8rem;
        padding-bottom:5rem;
        width:100%;
    }
    `;


const DescriptionText = () => {
    return ( 
        <div>
            
                <Row>
                    <Col>
                        <Description className="align-self-center">Every Second, minute and day is a different experience in every single space.
                        <br/>
                        <SpanPink 
                        >Why play the same music?</SpanPink>
                        </Description>
                    </Col>
                </Row>
            
        </div>
     );
}
 
export default DescriptionText;
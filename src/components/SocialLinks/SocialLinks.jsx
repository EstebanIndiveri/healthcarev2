import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter,
    faInstagram,
    faFacebookSquare,
    faLinkedinIn, 
    faWhatsapp} 
from '@fortawesome/free-brands-svg-icons'
import styled from '@emotion/styled'

const SocialLinks = () => {

/* styles components */

const Div=styled.div`

display: flex;
/* padding-left: 2.3rem; */
justify-content:center;
font-size:20px;
    svg{
        margin:.2rem;
        transition: transform .3s ease-in-out;
        &:hover{
            transform:translateY(-.2rem);
            cursor:pointer;
        }
    }
`;

const A=styled.a`
text-decoration:none;
color:#8bc9dc;
transition:color .3s ease-in-out;
&:hover{
    color:#7bb3c4;
}
`;
    return ( 
        <Div>
            <A href="#!"><FontAwesomeIcon icon={faWhatsapp} /></A>
            {/* <A href="#!"><FontAwesomeIcon icon={faFacebookSquare}/></A> */}
            <A href="#!"><FontAwesomeIcon icon={faInstagram}/></A>
            {/* <A href="#!"><FontAwesomeIcon icon={faTwitter} /></A> */}
            <A href="#!"><FontAwesomeIcon icon={faLinkedinIn} /></A>
        </Div>
     );
}
 
export default SocialLinks;
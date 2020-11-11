import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter,
    faInstagram,
    faFacebookSquare,
    faLinkedinIn } 
from '@fortawesome/free-brands-svg-icons'
import styled from '@emotion/styled'

const SocialLinks = () => {

/* styles components */

const Div=styled.div`

display: flex;
padding-left: 2.3rem;
justify-content:inherit;
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
color:white;
transition:color .3s ease-in-out;
&:hover{
    color:#af235d;
}
`;
    return ( 
        <Div className="animate__animated animate__fadeIn animate__delay-3s">
            <A href="#!"><FontAwesomeIcon icon={faFacebookSquare}/></A>
            <A href="#!"><FontAwesomeIcon icon={faInstagram}/></A>
            <A href="#!"><FontAwesomeIcon icon={faTwitter} /></A>
            <A href="#!"><FontAwesomeIcon icon={faLinkedinIn} /></A>
        </Div>
     );
}
 
export default SocialLinks;
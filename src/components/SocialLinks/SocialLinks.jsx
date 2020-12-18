import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter,
    faInstagram,
    faFacebookSquare,
    faLinkedinIn, 
    faWhatsapp} 
from '@fortawesome/free-brands-svg-icons'
import styled from '@emotion/styled'

const SocialLinks = (props) => {

/* styles components */

const{size}=props;

let tamanio=size>20? size+'px': '20px';

const Div=styled.div`

display: flex;
/* padding-left: 2.3rem; */
justify-content:center;
font-size:${tamanio};
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
            <A href="https://wa.me/543516506745?text=Buenos%20días%20necesito%20sacar%20un%20turno%20para%20mi%20hijo" target="_blank"><FontAwesomeIcon icon={faWhatsapp} /></A>
            <A href="#!"><FontAwesomeIcon icon={faInstagram}/></A>
            <A href="#!"><FontAwesomeIcon icon={faLinkedinIn} /></A>
        </Div>
     );
}
 
export default SocialLinks;
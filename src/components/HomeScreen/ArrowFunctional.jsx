import React from 'react';
import {css} from '@emotion/core';
import styled from '@emotion/styled';

import './ArrowFunctional.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Span = styled.span`

position:relative;
top:78vh;
cursor:pointer;
`;

const ArrowFunctional = ({scroll,where}) => {
    return ( 
    
        <Span id="arrow" onClick={()=>scroll(where)}> <FontAwesomeIcon className="animate__animated animate__bounce" icon={faArrowDown}/></Span>        
    
    );
}
 
export default ArrowFunctional;
import React from 'react'
import PersonalDescription from '../PersonalDescription';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import './DescriptionText.scss';

const DescriptionText = () => {
    return ( 
        <div id="descriptionText" className="animate__animated  animate__slower" css={css`
        height:100vh !important;
        background-color:#fdfdfd;
        /* box-shadow:0px 0px 10px #e7e7e7; */
        /* box-shadow: -5px 0px 24px -5px #e7e7e7; */
        box-shadow: -5px 0px 24px -5px #e7e7e769;

        border-radius:10px;
        margin-top:7rem;
        margin-right:1rem;
        @media(max-width:991px){
            margin-top:0px !important;
        }
        `}>
            <div>
                <PersonalDescription/>
            </div>
        </div>
     );
}
 
export default DescriptionText;
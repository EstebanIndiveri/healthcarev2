import React from 'react'
import {Container,Col,Row} from 'reactstrap';
import { css } from '@emotion/core';


import './PersonalDescription';

const PersonalDescription = () => {
    return ( 
        <Container>
            <Row>
                <Col>
                    <div 
                    css={css`
                        padding:10px;
                        padding-top:3rem;
                        `}>
                        <h2 className="text-center text-underline">
                            Medico Pediatra
                        </h2>
                            <p className="text-justify mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis adipisci ratione provident quae voluptate inventore iure, animi, iste sunt reprehenderit quasi a excepturi cum facere libero commodi? Tempora eveniet quae eaque, consectetur modi possimus provident quis, optio sed placeat facilis?</p>
                    </div>
                </Col>
            </Row>
        </Container>
     );
}
 
export default PersonalDescription;
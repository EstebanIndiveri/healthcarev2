import React from 'react'
import {Container,Col,Row} from 'reactstrap';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import './PersonalDescription';


const Span=styled.span`
    font-style:italic;
    /* font-weight:lighter; */
    font-family: 'Montserrat' !important;
`;

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
                            <p className="text-justify mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quas itaque tempora placeat labore dicta harum mollitia cum voluptas blanditiis quidem dignissimos nulla praesentium corporis eveniet iure error assumenda id rem, cupiditate ratione, quibusdam vitae! Placeat ab autem nostrum fugiat amet quod, officiis qui cupiditate aspernatur eius recusandae voluptas dignissimos quo blanditiis, illum consequatur! Quibusdam voluptates nemo ullam nulla error sapiente optio suscipit id eum, eveniet facilis asperiores ut, recusandae non, eaque unde ipsam consequatur iusto
                            </p> 
                            <p className="text-justify mt-4">nostrum sunt mollitia quam? Error impedit magni nisi voluptatibus culpa eum ea harum amet repudiandae quas totam nesciunt beatae earum temporibus rerum, facere esse reprehenderit aliquid labore ratione animi ipsam. Eveniet eum autem iste nam molestiae, reprehenderit, esse deleniti porro facere libero, tenetur corporis sapiente rem consectetur cupiditate impedit odit sunt quisquam laborum. Doloremque deserunt accusantium nulla. 
                            <p className="mt-4">En pocas palabras, la labor del pediatra consiste en <Span>“cuidar al niño sano, evaluar su salud y la cuestión nutricional para que cubra sus requerimientos, además de monitorear su desarrollo psicológico y social”</Span>
                            </p>
                             </p>
                    </div>
                </Col>
            </Row>
        </Container>
     );
}
 
export default PersonalDescription;
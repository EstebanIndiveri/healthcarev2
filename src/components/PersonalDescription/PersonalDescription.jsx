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
                            <p className="text-justify mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quas itaque tempora placeat labore dicta harum mollitia cum voluptas blanditiis quidem dignissimos nulla praesentium corporis eveniet iure error assumenda id rem, cupiditate ratione, quibusdam vitae! Placeat ab autem nostrum fugiat amet quod, officiis qui cupiditate aspernatur eius recusandae voluptas dignissimos quo blanditiis, illum consequatur! Quibusdam voluptates nemo ullam nulla error sapiente optio suscipit id eum, eveniet facilis asperiores ut, recusandae non, eaque unde ipsam consequatur iusto
                            </p> 
                            <p className="text-justify mt-4">nostrum sunt mollitia quam? Error impedit magni nisi voluptatibus culpa eum ea harum amet repudiandae quas totam nesciunt beatae earum temporibus rerum, facere esse reprehenderit aliquid labore ratione animi ipsam. Eveniet eum autem iste nam molestiae, reprehenderit, esse deleniti porro facere libero, tenetur corporis sapiente rem consectetur cupiditate impedit odit sunt quisquam laborum. Doloremque deserunt accusantium nulla. Non quas praesentium eaque, nobis incidunt quam maiores rerum repellendus, recusandae quaerat alias fuga saepe error architecto voluptate et adipisci aspernatur nesciunt obcaecati minus corrupti! </p>
                    </div>
                </Col>
            </Row>
        </Container>
     );
}
 
export default PersonalDescription;
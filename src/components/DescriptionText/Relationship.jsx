import React from 'react'
import { SpanPink, Description } from './DescriptionText';
import { Row, Col } from 'reactstrap';


const Relationship = () => {
    return ( 
                <Row>
                    <Col>
                        <Description className="align-self-center">We collect live variables to create the right mood in each space.<br/>
                        Turning just a moment into <SpanPink> a relationship between your brands and your customers</SpanPink>
                        <br/>
                        </Description>
                    </Col>
                </Row>
        );
}
 
export default Relationship;
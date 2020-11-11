import React, { Fragment } from 'react'
import {
    Card, CardTitle, CardGroup,
     CardBody
  } from 'reactstrap';
  
import './CardDetail.scss';
import { css } from '@emotion/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStoreAlt, faHotel, faUtensils} from '@fortawesome/free-solid-svg-icons';
import { faGg} from '@fortawesome/free-brands-svg-icons';
import styled from '@emotion/styled';

const Title=styled.h1`
text-align:center;
font-weight:700;
font-size:2.4rem;
`;

const CardDetail = () => {
    return ( 
        <Fragment>
            <Title>Select a type of <br/> Comercial Space:</Title>
            <CardGroup>
      <Card id="firstCard" css={css`    
        background-color: #414165 !important;
        border: none;
        margin:2rem;
        `}>
        <CardBody>
        <FontAwesomeIcon icon={faStoreAlt} color="#af235d" size="lg"/>
          <CardTitle><p><b>Retail</b></p></CardTitle>
        </CardBody>
      </Card>
      <Card css={css`
      background-color: #414165 !important;
        border: none;
        margin:2rem;`}>
         <CardBody>
        <FontAwesomeIcon icon={faHotel} color="#af235d" size="lg"/>
          <CardTitle><p><b>Hotel</b></p></CardTitle>
        </CardBody>
      </Card>
      <Card css={css`background-color: #414165 !important;
        border: none;
        margin:2rem;`}>
        <CardBody>
        <FontAwesomeIcon icon={faUtensils} color="#af235d" size="lg"/>
          <CardTitle><p><b>Restaurant</b></p></CardTitle>
        </CardBody>
      </Card>
      <Card css={css`background-color: #414165 !important;
        border: none;
        margin:2rem;`}>
        <CardBody>
        <FontAwesomeIcon icon={faGg} color="#af235d" size="lg"/>
          <CardTitle><p><b>other</b></p></CardTitle>
        </CardBody>
      </Card>
    </CardGroup>
        </Fragment>
     );
}
 
export default CardDetail;
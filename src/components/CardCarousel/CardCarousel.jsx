import styled from "@emotion/styled";
import React from "react";
import ReactCardCarousel from 'react-card-carousel';
import Button from "reactstrap/lib/Button";
import Card from "reactstrap/lib/Card";
import CardText from "reactstrap/lib/CardText";
import CardTitle from "reactstrap/lib/CardTitle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons'


var CARD_STYLE={
    width: '70vw',
    paddingBottom:'0px',
    textAlign: 'center',
    fontSize: '12px',
    textTransform: 'uppercase',
    borderRadius: '10px',
    boxShadow:'2px 2px 10px #cdcccc',
    border:'none'
}

const ButtonPink=styled.button`
    background-color:#fce9e9;
    padding:1rem;
    border:none;
    border-radius:20px;
    font-size:1rem;
    color:white;
    &:focus{
        outline:none;
    }
`;

const Texto=styled.div`
text-transform:lowercase;
font-size:.9rem;
font-family:'Montserrat';
color:#808080;
`

const Title=styled.div`
font-family:'Montserrat' !important;
`;

const CardCarousel = () => {

   

  return (
      <div style={{width:'100%'}}>

      
    <ReactCardCarousel autoplay={true} autoplay_speed={ 3500 } >
        <div style={ CARD_STYLE }>
        <Card body className="p-5" style={{borderColor: 'white',borderRadius:'20px'}}>
        <CardTitle tag="h4"><Title>Special Title Treatment</Title></CardTitle>
        <CardText><Texto>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam inventore impedit aliquid aspernatur ad sunt, libero ratione dolore tempora voluptatum ipsam ipsa ullam sint laborum modi eligendi assumenda. Et, qui?</Texto>
        <FontAwesomeIcon icon={faStar} color="#f7e8c9" style={{fontSize:"22px"}} />
        <FontAwesomeIcon icon={faStar} color="#f7e8c9" style={{fontSize:"22px"}} />
        <FontAwesomeIcon icon={faStar} color="#f7e8c9" style={{fontSize:"22px"}} />
        <FontAwesomeIcon icon={faStar} color="#f7e8c9" style={{fontSize:"22px"}} />
        <FontAwesomeIcon icon={faStar} color="#f7e8c9" style={{fontSize:"22px"}} />
        </CardText>
        <ButtonPink >Go somewhere</ButtonPink>
      </Card>
        </div>

        <div style={ CARD_STYLE }>
        <Card body className="p-5" style={{borderColor: 'white',borderRadius:'20px'}}>
        <CardTitle tag="h4"><Title>Special Title Treatment</Title></CardTitle>
        <CardText><Texto>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam inventore impedit aliquid aspernatur ad sunt, libero ratione dolore tempora voluptatum ipsam ipsa ullam sint laborum modi eligendi assumenda. Et, qui?</Texto>
        <FontAwesomeIcon icon={faStar} color="#f7e8c9" style={{fontSize:"22px"}} />
        <FontAwesomeIcon icon={faStar} color="#f7e8c9" style={{fontSize:"22px"}} />
        <FontAwesomeIcon icon={faStar} color="#f7e8c9" style={{fontSize:"22px"}} />
        <FontAwesomeIcon icon={faStar} color="#f7e8c9" style={{fontSize:"22px"}} />
        <FontAwesomeIcon icon={faStar} color="#f7e8c9" style={{fontSize:"22px"}} />
        </CardText>
        <ButtonPink >Go somewhere</ButtonPink>
      </Card>
        </div>

        <div style={ CARD_STYLE }>
        <Card body className="p-5" style={{borderColor: 'white',borderRadius:'20px'}}>
        <CardTitle tag="h4"><Title>Special Title Treatment</Title></CardTitle>
        <CardText><Texto>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam inventore impedit aliquid aspernatur ad sunt, libero ratione dolore tempora voluptatum ipsam ipsa ullam sint laborum modi eligendi assumenda. Et, qui?</Texto>
        <FontAwesomeIcon icon={faStar} color="#f7e8c9" style={{fontSize:"22px"}} />
        <FontAwesomeIcon icon={faStar} color="#f7e8c9" style={{fontSize:"22px"}} />
        <FontAwesomeIcon icon={faStar} color="#f7e8c9" style={{fontSize:"22px"}} />
        <FontAwesomeIcon icon={faStar} color="#f7e8c9" style={{fontSize:"22px"}} />
        <FontAwesomeIcon icon={faStar} color="#f7e8c9" style={{fontSize:"22px"}} />
        </CardText>
        <ButtonPink >Go somewhere</ButtonPink>
      </Card>
        </div>

        <div style={ CARD_STYLE }>
        <Card body className="p-5" style={{borderColor: 'white',borderRadius:'20px'}}>
        <CardTitle tag="h4"><Title>Special Title Treatment</Title></CardTitle>
        <CardText><Texto>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam inventore impedit aliquid aspernatur ad sunt, libero ratione dolore tempora voluptatum ipsam ipsa ullam sint laborum modi eligendi assumenda. Et, qui?</Texto>
        <FontAwesomeIcon icon={faStar} color="#f7e8c9" style={{fontSize:"22px"}} />
        <FontAwesomeIcon icon={faStar} color="#f7e8c9" style={{fontSize:"22px"}} />
        <FontAwesomeIcon icon={faStar} color="#f7e8c9" style={{fontSize:"22px"}} />
        <FontAwesomeIcon icon={faStar} color="#f7e8c9" style={{fontSize:"22px"}} />
        <FontAwesomeIcon icon={faStar} color="#f7e8c9" style={{fontSize:"22px"}} />
        </CardText>
        <ButtonPink >Go somewhere</ButtonPink>
      </Card>
        </div>

        <div style={ CARD_STYLE }>
        <Card body className="p-5" style={{borderColor: 'white',borderRadius:'20px'}}>
        <CardTitle tag="h4"><Title>Special Title Treatment</Title></CardTitle>
        <CardText><Texto>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam inventore impedit aliquid aspernatur ad sunt, libero ratione dolore tempora voluptatum ipsam ipsa ullam sint laborum modi eligendi assumenda. Et, qui?</Texto>
        <FontAwesomeIcon icon={faStar} color="#f7e8c9" style={{fontSize:"22px"}} />
        <FontAwesomeIcon icon={faStar} color="#f7e8c9" style={{fontSize:"22px"}} />
        <FontAwesomeIcon icon={faStar} color="#f7e8c9" style={{fontSize:"22px"}} />
        <FontAwesomeIcon icon={faStar} color="#f7e8c9" style={{fontSize:"22px"}} />
        <FontAwesomeIcon icon={faStar} color="#f7e8c9" style={{fontSize:"22px"}} />
        </CardText>
        <ButtonPink >Go somewhere</ButtonPink>
      </Card>
        </div>
      </ReactCardCarousel>
      </div>
  );
};

export default CardCarousel;

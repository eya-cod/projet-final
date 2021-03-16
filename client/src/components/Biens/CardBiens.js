import React from "react";

import * as ReactBootStrap from "react-bootstrap"
import RdvModal from "../Rdv.js/RdvModal";

const CardBiens = ({ el }) => {
  
  return (
   
    <div className="card">
      
     <ReactBootStrap.Card style={{ width: '18rem' }}> 

  <ReactBootStrap.Card.Img variant="top" src={el.images} />
  <img className="img"
		src="./images/logo/transp-marron.png"
		/>
  <ReactBootStrap.Card.Body>
  
    <ReactBootStrap.Card.Title className="titra">{el.titre} </ReactBootStrap.Card.Title>
    <ReactBootStrap.Card.Text>
    {el.prix}
    </ReactBootStrap.Card.Text>
    <ReactBootStrap.Card.Text>
    {el.localisation}
    </ReactBootStrap.Card.Text>
    <ReactBootStrap.Card.Text>
    {el.description}
    </ReactBootStrap.Card.Text>
    <ReactBootStrap.Card.Text>
    {el.NbPieces}
    </ReactBootStrap.Card.Text>
    <ReactBootStrap.Card.Text>
    {el.surface}
    </ReactBootStrap.Card.Text>
    <ReactBootStrap.Card.Text>
    {el.typeBien}
    </ReactBootStrap.Card.Text>
    <ReactBootStrap.Card.Text>
    {el.typeTransaction}
    </ReactBootStrap.Card.Text>
    <ReactBootStrap.Button  className="card button" > <RdvModal /></ReactBootStrap.Button>
  </ReactBootStrap.Card.Body>
</ReactBootStrap.Card>
   
    </div>
    
  );
};

export default CardBiens;
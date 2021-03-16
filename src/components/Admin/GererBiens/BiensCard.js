import React from "react";
import { useDispatch } from "react-redux";

import { deleteBiens } from "../../../actions/biensActions";
import EdditBien from "./EdditBien"
import * as ReactBootStrap from "react-bootstrap"


const BiensCard = ({el}) => {
    const dispatch = useDispatch();

    const handleDeleteBien = () => {
      
      dispatch(deleteBiens (el._id));
    };
    return (
        <div style={{ minWidth: "300px", margin: "10px" }}>
          <ReactBootStrap.Card style={{ width: '18rem' }}>
      <ReactBootStrap.Card.Img variant="top" src="holder.js/100px180" />{el.images}
      <ReactBootStrap.Card.Body>
        <ReactBootStrap.Card.Title>{el.titre} </ReactBootStrap.Card.Title>
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
        <ReactBootStrap.Button variant="primary" onClick={handleDeleteBien}>supprimer</ReactBootStrap.Button>
        <EdditBien el={el} />
      </ReactBootStrap.Card.Body>
    </ReactBootStrap.Card>
        </div>
      );
};
export default BiensCard
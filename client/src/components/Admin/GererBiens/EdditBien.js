import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as ReactBootStrap from "react-bootstrap"
import { editBiens } from "../../../actions/biensActions";

const EdditBien = ({ el }) => {

    const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
    
    const [editedTitre, setEditedTitre] = useState(el.titre);
    const [editedPrix, setEditedPrix] = useState(el.prix);
    const [editedDescription, setEditedDescription] = useState(el.description);
    const [editedLocalisation, setEditedLocalisation] = useState(el.localisation);
    const [editedImages, setEditedImages] = useState(el.images);
    const [editedNbPieces, setEditedNbPieces] = useState(el.NbPieces);
    const [editedSurface, setEditedSurface] = useState(el.surface);
    const [editedTypeBien, setEditedTypeBien] = useState(el.typeBien);
    const [editedTypeTransaction, setEditedTypeTransaction] = useState(el.typeTransaction);
  
    const dispatch = useDispatch();
  
    const toggle = () => {
      
      setEditedTitre(el.titre);
      setEditedPrix(el.prix);
      setEditedDescription(el.description);
      setEditedLocalisation(el.localisation);
      setEditedImages(el.images);
      setEditedNbPieces(el.NbPieces);
      setEditedSurface(el.surface);
      setEditedTypeBien(el.typeBien);
      setEditedTypeTransaction(el.typeTransaction);
      
    };
  
    const handleEditbien = () => {
      const editedbien = {
        titre:editedTitre,
        prix:editedPrix,
        description:editedDescription,
        localisation:editedLocalisation,
        images:editedImages,
        NbPieces:editedNbPieces,
        surface:editedSurface,
        typeBien:editedTypeBien,
        typeTransaction:editedTypeTransaction,
      };

      dispatch(editBiens(el._id, editedbien));
      toggle();
    };

return (
  <>
    <ReactBootStrap.Button variant="primary" onClick={handleShow}>
      eddit bien
    </ReactBootStrap.Button>

    <ReactBootStrap.Modal show={show} onHide={handleClose}>
      <ReactBootStrap.Modal.Header closeButton>
        <ReactBootStrap.Modal.Title>eddit bien</ReactBootStrap.Modal.Title>
      </ReactBootStrap.Modal.Header>
      <ReactBootStrap.Modal.Body>
      <form>
            <label>titre</label>
            <input
              value={editedTitre}
              onChange={(e) => setEditedTitre(e.target.value)}
              type="text"
            />
            <br />
            <label>prix</label>
            <input
              value={editedPrix}
              onChange={(e) => setEditedPrix(e.target.value)}
              type="number"
              
            />
            <br />
            <label>description</label>
            <input
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
              type="text"
            />
            <br />
            <label>localisation</label>
            <input
              value={editedLocalisation}
              onChange={(e) => setEditedLocalisation(e.target.value)}
              type="text"
            />
            <br />
            <label>images</label>
            <input
              value={editedImages}
              onChange={(e) => setEditedImages(e.target.value)}
              type=""
            />
            <br />
            <label>nb de pieces</label>
            <input
              value={editedNbPieces}
              onChange={(e) => setEditedNbPieces(e.target.value)}
              type="number"
            />
            <br />
            <label>surface</label>
            <input
              value={editedSurface}
              onChange={(e) => setEditedSurface(e.target.value)}
              type="number"
            />
            <br />
            <label>type de bien</label>
            <input
              value={editedTypeBien}
              onChange={(e) => setEditedTypeBien(e.target.value)}
              type="text"
            />
            <br />
            <label>type de transaction</label>
            <input
              value={editedTypeTransaction}
              onChange={(e) => setEditedTypeTransaction(e.target.value)}
              type="text"
            />
            <br />
          </form>
      </ReactBootStrap.Modal.Body>
      <ReactBootStrap.Modal.Footer>
        <ReactBootStrap.Button variant="secondary" onClick={handleClose}>
          annuler
        </ReactBootStrap.Button>
        <ReactBootStrap.Button variant="primary" onClick={handleEditbien}>
          valider
        </ReactBootStrap.Button>
      </ReactBootStrap.Modal.Footer>
    </ReactBootStrap.Modal>
  </>
);
};

export default EdditBien
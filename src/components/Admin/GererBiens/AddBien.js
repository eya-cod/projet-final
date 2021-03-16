import React, { useState ,useEffect} from "react";
import { useDispatch , useSelector} from "react-redux";
import { addBiens} from "../../../actions/biensActions";
import { Redirect } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap"

const AddBien = () => {
    
  const email = useSelector(state => state.authReducer.user.email)
  
  
  
    const [titre, setTitre] = useState();
    const [prix, setPrix] = useState(0);
    const [description, setDescription] = useState();
    const [localisation, setLocalisation] = useState();
    const [images, setImages] = useState();
    const [NbPieces, setNbPieces] = useState(0);
    const [surface, setSurface] = useState(0);
    const [typeBien, setTypeBien] = useState();
    const [typeTransaction, setTypeTransaction] = useState();
    const [cancel, setCancel] = useState(false);
    const dispatch = useDispatch();
    
    const addNewBien = () => {
      dispatch(addBiens({ 
        email,
        titre,
        prix,
        description,
        localisation,
        images,
        NbPieces,
        surface,
        typeBien,
        typeTransaction
      }));
      setCancel(!cancel);
    };
    return (
     

      <>
 
      {cancel ? (
        <Redirect to="/list" />
      ) : (
        <div className="tof">
        <div  style={{ margin: "500px" }}>
          {console.log(email)}
          
        <ReactBootStrap.Form>
        <ReactBootStrap.Form.Group controlId="formBasicEmail">
    <ReactBootStrap.Form.Label>TITRE</ReactBootStrap.Form.Label>
    <ReactBootStrap.Form.Control type="text" 
    placeholder="" 
    value={titre}
    onChange={(e) => setTitre(e.target.value)}/>
    
  </ReactBootStrap.Form.Group>

  <ReactBootStrap.Form.Group controlId="formBasicPassword">
    <ReactBootStrap.Form.Label>TYPE DE TRANSACTION</ReactBootStrap.Form.Label>
    <ReactBootStrap.Form.Control 
    type="text" 
    placeholder="a louer ou a vendre..." 
    value={typeTransaction}
    onChange={(e) => setTypeTransaction(e.target.value)}
    />
    </ReactBootStrap.Form.Group>
    <ReactBootStrap.Form.Group controlId="formBasicPassword">
    <ReactBootStrap.Form.Label>TYPE DE BIEN</ReactBootStrap.Form.Label>
    <ReactBootStrap.Form.Control 
    type="text" 
    placeholder="maison , appartement , terrain ..." 
    value={typeBien}
    onChange={(e) => setTypeBien(e.target.value)}
    />
    </ReactBootStrap.Form.Group>
    <ReactBootStrap.Form.Group controlId="formBasicPassword">
    <ReactBootStrap.Form.Label>LOCALISATON</ReactBootStrap.Form.Label>
    <ReactBootStrap.Form.Control 
    type="text" 
    placeholder="" 
    value={localisation}
    onChange={(e) => setLocalisation(e.target.value)}
    />
    </ReactBootStrap.Form.Group>
    <ReactBootStrap.Form.Group controlId="formBasicPassword">
    <ReactBootStrap.Form.Label>IMMAGES</ReactBootStrap.Form.Label>
    <ReactBootStrap.Form.Control 
    type="" 
    placeholder="" 
    value={images}
    onChange={(e) => setImages(e.target.value)}
    />
    </ReactBootStrap.Form.Group>
    <ReactBootStrap.Form.Group controlId="formBasicPassword">
    <ReactBootStrap.Form.Label>DESCRIPTION</ReactBootStrap.Form.Label>
    <ReactBootStrap.Form.Control 
    type="text" 
    placeholder="describe..." 
    value={description}
    onChange={(e) => setDescription(e.target.value)}
    />
    </ReactBootStrap.Form.Group>
    <ReactBootStrap.Form.Group controlId="formBasicPassword">
    <ReactBootStrap.Form.Label>NEMBRE DE PIECES</ReactBootStrap.Form.Label>
    <ReactBootStrap.Form.Control 
    type="number" 
    placeholder="add nb de pieces" 
    value={NbPieces}
    onChange={(e) => setNbPieces(e.target.value)}
    />
    </ReactBootStrap.Form.Group>
    <ReactBootStrap.Form.Group controlId="formBasicPassword">
    <ReactBootStrap.Form.Label>SURFACE</ReactBootStrap.Form.Label>
    <ReactBootStrap.Form.Control 
    type="number" 
    placeholder="add surface" 
    value={surface}
    onChange={(e) => setSurface(e.target.value)}
    />
    </ReactBootStrap.Form.Group>
    <ReactBootStrap.Form.Group controlId="formBasicPassword">
    <ReactBootStrap.Form.Label>PRIX</ReactBootStrap.Form.Label>
    <ReactBootStrap.Form.Control 
    type="number" 
    placeholder="add price" 
    value={prix}
    onChange={(e) => setPrix(e.target.value)}
    />
    </ReactBootStrap.Form.Group>

  
 <ReactBootStrap.Button onClick={addNewBien}>Add</ReactBootStrap.Button>
 <ReactBootStrap.Button onClick={() => setCancel(!cancel)}>cancel</ReactBootStrap.Button>
        </ReactBootStrap.Form>
        </div>
      </div>
    )}
     </>
    )
  };
  
  export default AddBien;
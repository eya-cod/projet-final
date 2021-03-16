import React,{ useState,useEffect } from 'react'
import * as ReactBootStrap from "react-bootstrap"
import {Col} from "react-bootstrap"
import { useDispatch } from 'react-redux';
import { addRdv, getRdv} from "../../actions/rdvActions"
import { Redirect } from "react-router-dom";





function RdvModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const [firstName, setName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();
    const [cancel, setCancel] = useState(false);


    const dispatch = useDispatch();
    
    const handleRdv = () => {
       
        dispatch(addRdv({ firstName, lastName, email, message}));
    setCancel(!cancel);
      };
      useEffect(() => {
        dispatch(getRdv());
      }, []);

    return (
        <>
        {cancel ? (
            <Redirect to="/" />
          ) : (
        <div>
          {console.log(firstName)}
      <ReactBootStrap.Button variant="primary" onClick={handleShow}>
        contacter agent
      </ReactBootStrap.Button>

      <ReactBootStrap.Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <ReactBootStrap.Modal.Header closeButton>
          <ReactBootStrap.Modal.Title>contacter agent</ReactBootStrap.Modal.Title>
        </ReactBootStrap.Modal.Header>
        <ReactBootStrap.Modal.Body>
        <ReactBootStrap.Form>

  <ReactBootStrap.Form.Row>
    <ReactBootStrap.Form.Group as={Col} controlId="formGridEmail">
      <ReactBootStrap.Form.Label>Email</ReactBootStrap.Form.Label>
      <ReactBootStrap.Form.Control type="email" placeholder="Enter email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}/>
    </ReactBootStrap.Form.Group>

    <ReactBootStrap.Form.Group as={Col} controlId="formGridPassword">
      <ReactBootStrap.Form.Label>nom</ReactBootStrap.Form.Label>
      <ReactBootStrap.Form.Control type="text" placeholder="text" 
      value={firstName} 
      onChange={(e) => setName(e.target.value)}/>
    </ReactBootStrap.Form.Group>
  </ReactBootStrap.Form.Row>

  <ReactBootStrap.Form.Group controlId="formGridAddress2">
    <ReactBootStrap.Form.Label>prenom</ReactBootStrap.Form.Label>
    <ReactBootStrap.Form.Control placeholder="" 
    value={lastName}
    onChange={(e) => setLastName(e.target.value)}/>
  </ReactBootStrap.Form.Group>

  <ReactBootStrap.Form.Group controlId="formGridAddress1">
    <ReactBootStrap.Form.Label>message</ReactBootStrap.Form.Label>
    <ReactBootStrap.Form.Control placeholder="text"
    value={message}
    onChange={(e) => setMessage(e.target.value)}/>
  </ReactBootStrap.Form.Group>

  <ReactBootStrap.Button variant="primary" type="submit"
  onClick={handleRdv}>
 contacter agent
 </ReactBootStrap.Button>
</ReactBootStrap.Form>
<ReactBootStrap.Button variant="primary" type="submit"
  onClick={() => setCancel(!cancel)}>
 Annuler
  </ReactBootStrap.Button>


</ReactBootStrap.Modal.Body>
      </ReactBootStrap.Modal>
        </div>
         )}
         </>
    )
}
export default RdvModal
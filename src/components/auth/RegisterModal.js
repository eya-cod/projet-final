import React,{ useState } from 'react'
import * as ReactBootStrap from "react-bootstrap"
import {Col} from "react-bootstrap"
import { useDispatch} from 'react-redux';
import { registerUser } from '../../actions/authActions'
import { useHistory } from 'react-router-dom';

export default function RegisterModal() {
  const mystyle = {
    backgroundColor: "Transparent",
    backgroundRepeat:"no-repeat",
    cursor:"pointer",
    overflow:"hidden",
    outline:"none",
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');

  
    const dispatch = useDispatch();
    const history = useHistory();
    const handleRegister = () => {
        const newUser = { name, lastName, email, password,phone };
        dispatch(registerUser(newUser));
        history.push('/profile');
        setEmail('');
        setName('');
        setLastName('');
        setPassword('');
        setPhone('');
      };
    return (
        <div>
      <ReactBootStrap.Button style={{backgroundColor: "Transparent",border:"none",color:"#00bcd4"}} className="functional-buttons"  onClick={handleShow}>
        Créer un Compte
        </ReactBootStrap.Button>

      <ReactBootStrap.Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <ReactBootStrap.Modal.Header closeButton>
          <ReactBootStrap.Modal.Title>s'enregistrer...</ReactBootStrap.Modal.Title>
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
      <ReactBootStrap.Form.Label>Password</ReactBootStrap.Form.Label>
      <ReactBootStrap.Form.Control type="password" placeholder="Password" 
      value={password} 
      onChange={(e) => setPassword(e.target.value)}/>
    </ReactBootStrap.Form.Group>
  </ReactBootStrap.Form.Row>

  <ReactBootStrap.Form.Group controlId="formGridAddress1">
    <ReactBootStrap.Form.Label>name</ReactBootStrap.Form.Label>
    <ReactBootStrap.Form.Control placeholder=""
    value={name}
    onChange={(e) => setName(e.target.value)}/>
  </ReactBootStrap.Form.Group>

  <ReactBootStrap.Form.Group controlId="formGridAddress2">
    <ReactBootStrap.Form.Label>last name</ReactBootStrap.Form.Label>
    <ReactBootStrap.Form.Control placeholder="" 
    value={lastName}
    onChange={(e) => setLastName(e.target.value)}/>
  </ReactBootStrap.Form.Group>

  <ReactBootStrap.Form.Row>
    <ReactBootStrap.Form.Group as={Col} controlId="formGridCity">
      <ReactBootStrap.Form.Label>phone</ReactBootStrap.Form.Label>
      <ReactBootStrap.Form.Control value={phone}
    onChange={(e) => setPhone(e.target.value)} />
    </ReactBootStrap.Form.Group>
  </ReactBootStrap.Form.Row>
  <ReactBootStrap.Button variant="primary" type="submit"
  onClick={handleRegister}>
    creer un compte
  </ReactBootStrap.Button>
</ReactBootStrap.Form>
</ReactBootStrap.Modal.Body>
      </ReactBootStrap.Modal>
        </div>
    )
}

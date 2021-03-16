import React,{ useState } from 'react'
import * as ReactBootStrap from "react-bootstrap"
import { useDispatch,useSelector } from 'react-redux';
import { loginUser } from '../../actions/authActions'
import { useHistory } from 'react-router-dom';

export default function LoginModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    const Admin = useSelector((state) => state.authReducer.user)
    const [isAdmin, setIsAdmin] = useState(Admin && Admin);
  
    const handleLogin = () => {
      dispatch(loginUser({ email, password }));
      history.push('/profile');
      setEmail('');
      setPassword('');
    };
  
    return (

      
        <div>
         {console.log(isAdmin)}
         <ReactBootStrap.Button style={{backgroundColor: "Transparent",border:"transparent",}} className="functional-buttons"  onClick={handleShow}>
        
        Connexion
        </ReactBootStrap.Button>

      <ReactBootStrap.Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <ReactBootStrap.Modal.Header closeButton>
          <ReactBootStrap.Modal.Title>se connecter...</ReactBootStrap.Modal.Title>
        </ReactBootStrap.Modal.Header>
        <ReactBootStrap.Modal.Body>
        <ReactBootStrap.Form.Group controlId="formBasicEmail">
    <ReactBootStrap.Form.Label>Email address</ReactBootStrap.Form.Label>
    <ReactBootStrap.Form.Control type="email" placeholder="Enter email"value={email}
      onChange={(e) => setEmail(e.target.value)} />
    <ReactBootStrap.Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </ReactBootStrap.Form.Text>
  </ReactBootStrap.Form.Group>

  <ReactBootStrap.Form.Group controlId="formBasicPassword">
    <ReactBootStrap.Form.Label>Password</ReactBootStrap.Form.Label>
    <ReactBootStrap.Form.Control type="password" placeholder="Password" value={password} 
      onChange={(e) => setPassword(e.target.value)} />
  </ReactBootStrap.Form.Group>
  <ReactBootStrap.Form.Group controlId="formBasicCheckbox">
    <ReactBootStrap.Form.Check type="checkbox" label="Check me out" />
  </ReactBootStrap.Form.Group>
        </ReactBootStrap.Modal.Body>
        <ReactBootStrap.Modal.Footer>
          <ReactBootStrap.Button variant="secondary" onClick={handleClose}>
            Close
          </ReactBootStrap.Button>
          <ReactBootStrap.Button variant="primary"onClick={handleLogin}>Login</ReactBootStrap.Button>
        </ReactBootStrap.Modal.Footer>
      </ReactBootStrap.Modal>
      </div>
  );
            
        
    
}

import React from 'react'
import {useDispatch} from 'react-redux'
import {deleteuser} from '../../../actions/userActions'
import * as ReactBootStrap from "react-bootstrap"

const UsersMap = ({el}) =>  {
    const dispatch = useDispatch()
    const handleDelete =()=>{
      dispatch(deleteuser(el._id))
    }
    return (
        <div>
            <ReactBootStrap.ListGroup>
  <ReactBootStrap.ListGroup.Item>{el.name}</ReactBootStrap.ListGroup.Item>
  <ReactBootStrap.ListGroup.Item>{el.lastName}</ReactBootStrap.ListGroup.Item>
  <ReactBootStrap.ListGroup.Item>{el.email}</ReactBootStrap.ListGroup.Item>
  <ReactBootStrap.ListGroup.Item>{el.phone}</ReactBootStrap.ListGroup.Item>
  <ReactBootStrap.Button onClick={handleDelete}>supprimer</ReactBootStrap.Button>
</ReactBootStrap.ListGroup>
        
        </div>
    )
}
export default UsersMap
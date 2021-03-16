import React from 'react'
import * as ReactBootStrap from "react-bootstrap"

const RdvMap = ({el}) =>  {
    
    return (
        <div className='rdvTof'>
            <ReactBootStrap.ListGroup className="ajust">
  <ReactBootStrap.ListGroup.Item>{el.name}</ReactBootStrap.ListGroup.Item>
  <ReactBootStrap.ListGroup.Item>{el.lastName}</ReactBootStrap.ListGroup.Item>
  <ReactBootStrap.ListGroup.Item>{el.email}</ReactBootStrap.ListGroup.Item>
  <ReactBootStrap.ListGroup.Item>{el.message}</ReactBootStrap.ListGroup.Item>
</ReactBootStrap.ListGroup>
        </div>
    )
}
export default RdvMap
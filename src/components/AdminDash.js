import React from 'react'
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom' 

const AdminDash=() =>{
  const Admin = useSelector((state) => state.authReducer.user)
  const myStyle={
    display:'flex' ,
    height:'300px',
    justifyContent: 'center',
    alignItems: 'center',
    
  }
    return (
      
        <div className="container" >
          <div style={myStyle} >
          {Admin && Admin.admin  &&  <Redirect to="/Admin"/>}
         
        <Link to='/gererBiens'>
        {" "}
        <button className='btnAd'>BIENS</button>
            </Link>
             <Link  to="/getRdv">
             <button className='btnAd'>RDV LIST</button>
              </Link>
              
              <Link  to="/addbien">
              <button className='btnAd'>ADD BIEN</button>
              </Link>
              </div>
        </div>
    )
}
export default AdminDash
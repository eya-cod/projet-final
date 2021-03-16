import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {getAllUsers} from '../../../actions/userActions'
import UsersMap from './UsersMap'



const Allusers =()=>{
    const dispatch = useDispatch();
    const allusers =()=> dispatch(getAllUsers());
    useEffect(() => {
        allusers();
      }, []);
    
    const t = useSelector(state => state.usersReducer.allusers.allUsers);
    console.log(t)
    return (
        <div>
            {t && t.map((el)=> <UsersMap el={el} /> )}
        </div>
    )
}
export default Allusers;
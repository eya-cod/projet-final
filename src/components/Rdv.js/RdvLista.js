import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {getRdv} from "../../actions/rdvActions"

import RdvModal from './RdvModal'


const RdvList =()=>{
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getRdv());
      }, []);
    
    const t = useSelector(state => state.rdvReducer.rdv.rdv);
    
    return (
        <div>
             {t&& 
         t.map((el) => (
           <RdvModal key={el._id} el={el} />
         ))}
        </div>
    )
}
export default RdvList;
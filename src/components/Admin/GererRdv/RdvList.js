import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {getRdv} from "../../../actions/rdvActions"
import RdvMap from './RdvMap'



const RdvList =()=>{
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getRdv());
      }, []);
    
    const t = useSelector(state => state.rdvReducer.rdv.rdvs);
    
    return (
        <div >

             {t&& 
         t.map((el) => (
           <RdvMap key={el._id} el={el} />
         ))}
        </div>
    )
}
export default RdvList;
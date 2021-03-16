import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBiens} from "../../actions/biensActions";
import CardBiens from "./CardBiens";
import Search from "./Search";
const ListBiens = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBiens());
  }, []);
  const B = useSelector((state) => state.biensReducer.biens.biens);
  const search = useSelector((state) => state.biensReducer.search);
  return (
    <div>
      <Search />
    <div style={{ display: "flex", flexWrap: "wrap", margin: "20px" }}>
      {search?(
<>
        {B&& 
        B.filter(el=>el.localisation.toLowerCase().trim().includes( search.toLowerCase().trim()))
        .map((el) => (
          <CardBiens key={el._id} el={el} />
        ))}</> ):
        (<>
          {B&& 
         
          B.map((el) => (
            <CardBiens key={el._id} el={el} />
          ))} </>)}
      
    </div>
    
    </div>
  );
};

export default ListBiens;
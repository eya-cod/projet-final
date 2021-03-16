import axios from "axios";
import { GET_BIENS, SEARCH } from "../constants/ActionTypes";

export const getBiens = () => (dispatch) => {
  axios
    .get("/api/getbiens")
    
    .then((res) => dispatch({ type: GET_BIENS, payload: res.data }))
    
    .catch((err) => console.log(err));
};

export const searchBien = (payload) => {

    
    return ({ type: SEARCH, 
      payload })
    
};


export const addBiens = (newBien) => (dispatch) => {
  axios
  .post("/api/addbiens", newBien)
  .then (res => dispatch(getBiens())) 
  .catch (err => console.log(err))
  
};


export const deleteBiens = ( idBien ) => (dispatch) => {
  axios
    .delete(`/api/deletebien/${idBien}`)
    .then((res) => dispatch(getBiens()))
    .catch ((err) => console.log(err));
};

export const editBiens = ( idBien, bienedited ) => (dispatch) => {
  axios
    .put(`/api/editbien/${idBien}`, bienedited)
    .then((res) => dispatch(getBiens()))
    .catch ((err) => console.log(err));
};

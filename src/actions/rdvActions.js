import axios from "axios";
import { GET_RDV } from "../constants/ActionTypes";

export const getRdv = () => (dispatch) => {
    axios
      .get("/api/rdvs")
      
      .then((res) => dispatch({ type: GET_RDV, payload: res.data }))
      
      .catch((err) => console.log(err));
};


export const addRdv = (newRdv) => (dispatch) => {
    axios
      .post("/api/rdvv", newRdv)
      .then((res) => dispatch(getRdv()))
      .catch((err) => console.log(err));
  };

import axios from "axios";
import { GETALL_USERS } from "../constants/ActionTypes";

export const getAllUsers = () => (dispatch) => {
  axios
    .get("/api/allusers")
    .then((res) => dispatch({ type: GETALL_USERS, payload: res.data }))
    .catch ((err) => console.log(err));
};

export const deleteuser = ( idUser ) => (dispatch) => {
    axios
      .delete(`/api/deleteuser/${idUser}`)
      .then((res) => dispatch(getAllUsers()))
      .catch ((err) => console.log(err));
  };
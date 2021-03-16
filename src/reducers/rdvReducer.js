import { GET_RDV} from "../constants/ActionTypes";

const initState = {
  rdv: [],
};

export const rdvReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_RDV:
      return {
        ...state,
        rdv: payload,
      };
    default:
      return state;
  }
};
export default rdvReducer;
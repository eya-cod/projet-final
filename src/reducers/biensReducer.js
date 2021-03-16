import { GET_BIENS, SEARCH} from "../constants/ActionTypes";

const initState = {
  biens:[],
  search:''
};

export const biensReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_BIENS:
      return {
        ...state,
        biens: payload,
      };
    case SEARCH:
      return {
        ...state,
        search: payload,
      };
    default:
      return state;
  }
};
export default biensReducer;
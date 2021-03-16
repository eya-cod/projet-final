  
import { GETALL_USERS} from "../constants/ActionTypes";

const initState = {
  allusers: [],
};

export const usersReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GETALL_USERS:
      return {
        ...state,
        allusers: payload,
      };
    default:
      return state;
  }
};
export default usersReducer
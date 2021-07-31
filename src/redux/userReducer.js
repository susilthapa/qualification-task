import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./userTypes";

const initialState = {
  currentPage: 1,
  users: {},
  loading: false,
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: {
          data:
            state.users.data && action.payload.meta.pagination.page !== 1
              ? [...state.users.data, ...action.payload.data]
              : action.payload.data,
          meta: action.payload.meta,
        },
        error: "",
        currentPage: state.currentPage + 1,
      };
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;

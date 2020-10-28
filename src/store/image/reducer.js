import { FETCHED_USERS, LOADING_PAGES } from "../appState/actions";

const initialState = {
  loading: true,
  list: [],
};

export function allUserReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_PAGES: {
      return {
        ...state,
        loading: false,
      };
    }
    case FETCHED_USERS: {
      return {
        loading: false,
        list: action.payload,
      };
    }

    default:
      return state;
  }
}

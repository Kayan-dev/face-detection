import {
  ADDING_IMAGE,
  FETCHED_USERS,
  LOADING_PAGES,
} from "../appState/actions";

const initialState = {
  loading: true,
  list: [],
  image: null,
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
    case ADDING_IMAGE: {
      return {
        ...state,
        loading: false,
        image: action.payload,
      };
    }

    default:
      return state;
  }
}

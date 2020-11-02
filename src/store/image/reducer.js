import {
  ADDING_IMAGE,
  FETCHED_IMAGES,
  FETCHED_USERS,
  LOADING_PAGES,
} from "../appState/actions";

const initialState = {
  loading: true,
  list: [],
  image: [],
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
    case FETCHED_IMAGES: {
      return {
        ...state,
        image: [...state.image, action.payload],
      };
    }

    default:
      return state;
  }
}

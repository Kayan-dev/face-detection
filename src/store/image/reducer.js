import {
  ADDING_IMAGE,
  FETCHED_IMAGES,
  FETCHED_USERS,
  LOADING_PAGES,
} from "../appState/actions";

const initialState = {
  loading: true,
  image: [],
};

export default function Images(state = initialState, action) {
  switch (action.type) {
    case LOADING_PAGES: {
      return {
        ...state,
        loading: false,
      };
    }
    case ADDING_IMAGE: {
      return {
        ...state,
        loading: false,
        image: [...state.image, action.payload],
      };
    }
    case FETCHED_IMAGES: {
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

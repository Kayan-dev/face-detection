import {
  ADDING_IMAGE,
  FETCHED_IMAGES,
  LOADING_PAGES,
  STORY_DELETE_SUCCES,
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
    case STORY_DELETE_SUCCES:
      const imageId = action.payload;
      const updateImages = state.image.allImages.filter(
        (image) => image.id !== imageId
      );
      return {
        ...state,
        image: {
          ...state.image,
          allImages: updateImages,
        },
      };
    default:
      return state;
  }
}

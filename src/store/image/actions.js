import { apiUrl } from "../../config/constants";
import axios from "axios";
import {
  appLoading,
  appDoneLoading,
  setMessage,
  FETCHED_USERS,
  LOADING_PAGES,
  showMessageWithTimeout,
  FETCHED_IMAGES,
} from "../appState/actions";

export function startLoading() {
  return {
    type: LOADING_PAGES,
  };
}

export function usersFetched(listofUsers) {
  return {
    type: FETCHED_USERS,
    payload: listofUsers,
  };
}

export function fetchImages(images) {
  return {
    type: FETCHED_IMAGES,
    payload: images,
  };
}
export const addImage = (image) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      console.log("Image:", image);
      //  console.log("ID:", id);
      const response = await axios.post(`${apiUrl}/image`, {
        image,
      });
      dispatch(appDoneLoading());
      dispatch(showMessageWithTimeout("success", true, response.data, 3000));
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};

export async function getAllImages(dispatch, getState) {
  try {
    dispatch(appLoading);
    const response = await axios.get(`${apiUrl}/image`);
    const allImages = response.data;
    dispatch(appDoneLoading());
    dispatch(
      fetchImages({
        allImages,
      })
    );
  } catch (error) {
    if (error) {
    } else {
    }
  }
}

export async function allUsers(dispatch, getState) {
  try {
    dispatch(appLoading());
    const [userRes] = await Promise.all([axios.get(`${apiUrl}/user`)]);
    const allUser = userRes.data;
    dispatch(appDoneLoading());
    dispatch(
      usersFetched({
        allUser,
      })
    );
  } catch (error) {
    if (error) {
    } else {
    }
  }
}

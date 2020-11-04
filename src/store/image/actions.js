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
    console.log("add 1");
    dispatch(appLoading());
    console.log("add 2");
    console.log("what is image:", image);
    try {
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
    console.log("First");
    dispatch(appLoading);
    console.log("Second");
    const response = await axios.get(`${apiUrl}/image`);
    console.log("all Images:", response.data);
    const allImages = response.data;
    dispatch(appDoneLoading());
    dispatch(
      fetchImages({
        allImages,
        // user: userRes,
      })
    );
  } catch (error) {
    if (error) {
      console.log("WRONG!");
    } else {
      console.log("GOOD?");
    }
  }
}

export async function allUsers(dispatch, getState) {
  try {
    console.log("And this?");
    dispatch(appLoading());

    console.log("Hello");

    const [userRes] = await Promise.all([axios.get(`${apiUrl}/user`)]);

    console.log("All PAGES", userRes.data);
    const allUser = userRes.data;
    dispatch(appDoneLoading());
    dispatch(
      usersFetched({
        allUser,
        // user: userRes,
      })
    );
    // console.log("USER PAGE", userRes);
  } catch (error) {
    if (error) {
      //    console.log("WRONG!");
    } else {
      //     console.log("GOOD?");
    }
  }
}

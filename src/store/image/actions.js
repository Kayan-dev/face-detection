import { apiUrl } from "../../config/constants";
import axios from "axios";
import {
  appLoading,
  appDoneLoading,
  setMessage,
  FETCHED_USERS,
  LOADING_PAGES,
} from "../appState/actions";
import thunk from "redux-thunk";

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

export async function allUsers(dispatch, getState) {
  try {
    //  console.log("And this?");
    dispatch(appLoading());

    //  console.log("Hello");

    const [userRes] = await Promise.all([axios.get(`${apiUrl}/rank`)]);

    //console.log("All PAGES", pageRes.data);
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

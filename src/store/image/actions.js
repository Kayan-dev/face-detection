import { apiUrl } from "../../config/constants";
import axios from "axios";
import {
  appLoading,
  appDoneLoading,
  setMessage,
  FETCHED_USERS,
  LOADING_PAGES,
  ADDING_IMAGE,
  showMessageWithTimeout,
  FETCHED_IMAGES,
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

export const getAllImages = (image) => {
  return async (dispatch, getState) => {
    try {
      console.log("First");
      dispatch(appLoading);
      console.log("Second");

      const response = await Promise([axios.get(`${apiUrl}/image`)]);
      console.log("all Images:", response.data);
      const allimages = response.data;
      dispatch(appDoneLoading());
      dispatch(
        fetchImages({
          allimages,
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
  };
};

// export async function detailPages(dispatch, getState) {
//   try {
//     console.log("FIrst");
//     dispatch(appLoading());

//     console.log("HeSecondllo");

//     const [storyRes, userRes] = await Promise.all([
//       axios.get(`${apiUrl}/story`),
//       //   axios.get(`${apiUrl}/home/${id}`),
//     ]);

//     console.log("All STORIES", storyRes.data);
//     const lollie = storyRes.data;
//     dispatch(appDoneLoading());
//     dispatch(
//       fetchStories({
//         lollie,
//         // user: userRes,
//       })
//     );
//     // console.log("USER PAGE", userRes);
//   } catch (error) {
//     if (error) {
//       console.log("WRONG!");
//     } else {
//       console.log("GOOD?");
//     }
//   }
// }

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

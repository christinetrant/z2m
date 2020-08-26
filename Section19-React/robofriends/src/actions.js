import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "./constants";

// This is the action that will take the text inputted by user
// To make it cleaner we can wrap object around brackets which is the same as return:
export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});

// The action will the Type of change search field and it's going to send a payload of text

// robots will take dispatch and begin by pending
// It will fetch the api and dispatch the action of successful or error
export const requestRobots = (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  fetch("http://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: REQUEST_ROBOTS_SUCCESS,
        payload: data,
      })
    )
    .catch((err) =>
      dispatch({
        type: REQUEST_ROBOTS_FAILED,
        payload: err,
      })
    );
};

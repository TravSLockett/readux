import { FETCH_POSTS, NEW_POST, TEST, RESET } from "./types";

export const fetchPosts = () => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((posts) => dispatch({ type: FETCH_POSTS, payload: posts }));
};

export const testPost = (postData) => (dispatch) => {
  console.log("I am in testing posts");
  console.log(postData);
  dispatch({ type: TEST, payload: postData });
};
export const resetPost = (postData) => (dispatch) => {
  console.log("I am in resetting posts");
  console.log(postData);
  dispatch({ type: RESET, payload: postData });
};

export const createPost = (postData) => (dispatch) => {
  console.log("I am in creating post");
  console.log(postData);
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => dispatch({ type: NEW_POST, payload: post }));
};

import { FETCH_POSTS, NEW_POST, TEST, RESET } from "../actions/types";
const initialState = {
  items: [],
  item: {},
  test: "not testing",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload,
      };
    case NEW_POST:
      console.log("inside of the reducer and this is action.payload");
      console.log(action.payload);
      console.log(state.item);
      console.log(state.test);
      return {
        ...state,
        item: action.payload,
      };
    case TEST:
      console.log("inside of the reducer and this is action.payload");
      console.log(action.payload);
      console.log(state.test);
      return { ...state, test: action.payload };
    case RESET:
      console.log("inside of the reducer and this is action.payload");
      console.log(action.payload);
      console.log(state.test);
      return { ...state, test: action.payload };

    default:
      return state;
  }
}

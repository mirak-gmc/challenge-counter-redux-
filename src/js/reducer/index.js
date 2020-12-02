import { act } from "react-dom/test-utils";
import { INCREMENT, DECREMENT } from "../const";

//declare the initial state
const initState = {
  count: 199,
};

export default function rootReducer(state = initState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + action.payload };
    case DECREMENT:
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
}

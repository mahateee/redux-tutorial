import {
  DECREMENT,
  DEC_BY_VALUE,
  INCREMENT,
  INC_BY_VALUE,
} from "../actions/type";

const couterReducer = (state = { count: 0 }, action) => {
  if (action.type === INCREMENT) {
    return { ...state, count: state.count + 1 };
  } else if (action.type === DECREMENT) {
    return { ...state, count: state.count - 1 };
  } else if (action.type === INC_BY_VALUE) {
    return { ...state, count: state.count + action.value };
  } else if (action.type === DEC_BY_VALUE) {
    return { ...state, count: state.count - action.value };
  }
  return state;
};
export default couterReducer;

import { DECREMENT, DEC_BY_VALUE, INCREMENT, INC_BY_VALUE } from "./type";

export const incrementAction = async (dispatch) => {
  return dispatch({
    type: INCREMENT,
  });
};
export const decrementAction = (dispatch) => {
  return dispatch({
    type: DECREMENT,
  });
};
export const incrementByValueAction = (val, dispatch) => {
  return dispatch({
    type: INC_BY_VALUE,
    value: val,
  });
};
export const decrementByValueAction = (value) => {
  return {
    type: DEC_BY_VALUE,
    value,
  };
};

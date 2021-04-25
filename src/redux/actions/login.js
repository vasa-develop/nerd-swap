import types from "../constants";

export const login = () => async (dispatch) => {
  
  var user = await window.ethereum.enable()

  dispatch({
    type: types.LOGIN,
    payload: user,
  });
};

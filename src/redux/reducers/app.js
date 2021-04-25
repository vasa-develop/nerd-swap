import types from "../constants";

const initialState = {
  user: '',
  trx: {},
  todoList: [],
  loaded: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN:
      return { ...state, user: action.payload[0] };
    case types.ADD_TODO:
      return { ...state, todoList: [...state.todoList, action.payload] };
    case types.GET_TODOS:
      return {
        ...state,
        todoList: [...state.todoList, ...action.payload],
        loaded: true,
      };
    case types.UPDATE_TODOS:
      return {
        ...state,
        todoList: action.payload,
      };
    case types.TRADE:
      return {
        ...state,
        trx: action.payload
      }      
    default:
      return state;
  }
};

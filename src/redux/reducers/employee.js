import {
    ADD_EMP,
  DELETE_EMP,
  UPDATE_EMP,
  GET_ALL_EMP,
  } from "../constants/employee";
  
  const initialState = {
    emps: [],
    empsFilter:[]
  };
  
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case GET_ALL_EMP: {
        return {
          ...state,
          emps: payload,
        };
      }
      case ADD_EMP: {
        state.emps.push(payload);
        return {
          ...state,
        };
      }
      case UPDATE_EMP: {
        const index = state.emps.findIndex(
          (x) => x.maNv === payload.maNv
        );
        state.emps.splice(index,1);
        state.emps.push(payload)
        return {
          ...state,
        };
      }
      case DELETE_EMP: {
        const index = state.emps.findIndex(x => x.maNv === payload.maNv);
        state.emps.splice(index, 1);
        return {
          ...state,
        };
      }
      default:
        return { ...state };
    }
  };
  
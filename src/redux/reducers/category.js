import {
  GET_ALL_CATEGORY,
  ADD_CATEGORY,
  DELETE_CATEGORY,
  UPDATE_CATEGORY,
} from "../constants/category";

const initialState = {
  categories: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_CATEGORY: {
      return {
        ...state,
        categories: payload,
      };
    }
    case ADD_CATEGORY: {
      state.categories.push(payload);
      return {
        ...state,
      };
    }
    case UPDATE_CATEGORY: {
      const index = state.categories.findIndex(
        (x) => x.maLoaiXe === payload.maLoaiXe
      );
      state.categories[index].tenLoaiXe = payload.tenLoaiXe;
      return {
        ...state,
      };
    }
    case DELETE_CATEGORY: {
      const index = state.categories.findIndex((x) => x.maLoaiXe === payload);
      state.categories.splice(index, 1);
      return {
        ...state,
      };
    }
    default:
      return { ...state };
  }
};

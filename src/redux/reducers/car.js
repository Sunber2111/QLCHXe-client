import { GET_ALL_CAR, DELETE_CAR, UPDATE_CAR, ADD_CAR } from "../constants/car";

const initialState = {
  cars: [],
  carsFilter: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_CAR: {
      state.cars = payload;
      return { ...state };
    }
    case ADD_CAR: {
      state.cars.push(payload);
      return { ...state };
    }
    case UPDATE_CAR: {
      const index = state.cars.findIndex((x) => x.maXe === payload.maXe);
      state.cars.splice(index, 1);
      state.cars.push(payload);
      return {
        ...state,
      };
    }
    case DELETE_CAR: {
      const index = state.cars.findIndex((x) => x.maXe === payload);
      state.cars.splice(index, 1);
      return {
        ...state,
      };
    }
    default:
      return { ...state };
  }
};

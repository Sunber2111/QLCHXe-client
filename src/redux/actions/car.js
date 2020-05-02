import { GET_ALL_CAR, UPDATE_CAR, DELETE_CAR, ADD_CAR } from "../constants/car";
import agent from "../../app/api/agent";
import { success, error as err } from "../../app/notify";
import { v4 } from "uuid";
import { closeModal } from "./modal";
export const getAll = () => async (dispatch) => {
  const data = await agent.Product.getAll();
  dispatch({
    type: GET_ALL_CAR,
    payload: data,
  });
};

export const submit = (data) => async (dispatch) => {
  try {
    if (!data.maXe) {
      data.hinh = "https://localhost:5001/api/photo/p9.jpg";
      const car = await agent.Product.addCar({ ...data, maXe: v4() });
      dispatch({
        type: ADD_CAR,
        payload: car,
      });

      success("Thêm Thành Công");
    } else {
      await agent.Product.updateCar(data);
      dispatch({
        type: UPDATE_CAR,
        payload: data,
      });
      success("Sửa Thành Công");
    }
    dispatch(closeModal());
  } catch (error) {
    err("Thất Bại");
    console.log(error);
    
  }
};

export const deleteCar = (id) => async (dispatch) => {
  try {
    await agent.Product.deleteCar(id);
    dispatch({
      type: DELETE_CAR,
      payload: id,
    });
    success("Xóa Thành Công");
  } catch (error) {
    err("Xóa Thất Bại");
  }
};

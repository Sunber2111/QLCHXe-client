import {
  GET_ALL_CATEGORY,
  ADD_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
} from "../constants/category";
import { CLOSE_MODAL } from "../constants/modal";
import { v4 as uuidv4 } from "uuid";
import agent from "../../app/api/agent";
import { success, error as err } from "../../app/notify";

export const getAll = () => async (dispatch) => {
  try {
    const data = await agent.Product.getAllCategory();

    dispatch({
      type: GET_ALL_CATEGORY,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const submit = (loaixe) => async (dispatch) => {
  try {
    if (!loaixe.maLoaiXe) {
      const data = await agent.Product.addCategory({
        maLoaiXe: uuidv4(),
        tenLoaiXe: loaixe.tenLoaiXe,
      });

      dispatch({
        type: ADD_CATEGORY,
        payload: data,
      });

      success("Thêm Thành Công");
    } else {
      await agent.Product.updateCategory(loaixe);

      dispatch({
        type: UPDATE_CATEGORY,
        payload: loaixe,
      });

      success("Sửa Thành Công");
    }
  } catch (error) {
    console.log(error);
    
    err("thất bại");
  }
  dispatch({ type: CLOSE_MODAL });
};

export const deleteCategory = (id) => async (dispatch) => {
  try {
    const data = await agent.Product.deleteCategory(id);
    console.log(data);

    dispatch({
      type: DELETE_CATEGORY,
      payload: id,
    });

    success("Xóa Thành Công");
  } catch (error) {
    err("Xóa thất bại");
  }
};

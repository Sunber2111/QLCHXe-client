import {
  ADD_EMP,
  DELETE_EMP,
  UPDATE_EMP,
  GET_ALL_EMP,
} from "../constants/employee";
import agent from "../../app/api/agent";
import { success, error as err } from "../../app/notify";
import { v4 } from "uuid";
import { closeModal } from "./modal";

export const getAll = () => async (dispatch) => {
  const data = await agent.Employee.getAll();
  dispatch({
    type: GET_ALL_EMP,
    payload: data,
  });
};

export const submit = (data) => async (dispatch) => {
  try {
    if (!data.maNv) {
      data.hinh = "https://localhost:5001/api/photo/hien.jpg";
      const emp = await agent.Employee.addEmp({ ...data, maNv: v4() });
      dispatch({
        type: ADD_EMP,
        payload: emp,
      });

      success("Thêm Thành Công");
    } else {
      await agent.Employee.updateEmp(data);
      dispatch({
        type: UPDATE_EMP,
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

export const deleteEmp = (id) => async (dispatch) => {
  try {
    await agent.Employee.deleteEmp(id);
    dispatch({
      type: DELETE_EMP,
      payload: id,
    });
    success("Xóa Thành Công");
  } catch (error) {
    err("Xóa Thất Bại");
  }
};

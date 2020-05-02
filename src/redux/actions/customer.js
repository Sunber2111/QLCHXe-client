import * as customer from "../constants/customer";
import agent from "../../app/api/agent";
import { success, error as err } from "../../app/notify";
import { v4 } from "uuid";
import { closeModal } from "./modal";

export const getAll = () => async (dispatch) => {
  const data = await agent.Customer.getAll();
  dispatch({
    type: customer.GET_ALL_CUSTOMER,
    payload: data,
  });
};

export const submit = (data) => async (dispatch) => {
  try {
    if (!data.maKh) {
      const cus = await agent.Customer.addCus({ ...data, maKh: v4() });
      dispatch({
        type: customer.ADD_CUSTOMER,
        payload: cus,
      });

      success("Thêm Thành Công");
    } else {
      await agent.Customer.updateCus(data);
      dispatch({
        type: customer.UPDATE_CUSTOMER,
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

export const deleteCus = (id) => async (dispatch) => {
  try {
    await agent.Customer.deleteCus(id);
    dispatch({
      type: customer.DELETE_CUSTOMER,
      payload: id,
    });
    success("Xóa Thành Công");
  } catch (error) {
    err("Xóa Thất Bại");
  }
};

export const getOrder = id => async dispatch  =>
{
  try {
    const data = await agent.Customer.getOrder(id);
    dispatch({
      type: customer.GET_ORDERS_OF_CUS,
      payload: {data,id},
    });
  } catch (error) {
  }
}
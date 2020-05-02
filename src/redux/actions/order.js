import * as order from "../constants/order";
import agent from "../../app/api/agent";
import { success, error as err } from "../../app/notify";
import { v4 } from "uuid";
import { closeModal } from "./modal";

export const getAll = () => async (dispatch) => {
  const data = await agent.Phieu.getAllPhieuXuat();
  dispatch({
    type: order.GET_ALL_ORDER,
    payload: data,
  });
};

export const submit = (data) => async (dispatch) => {
  try {
    const day = new Date();
    const { maKh} = data;

    const ngayXuat = day.toISOString();
    const maHdx = v4();
    const maNv = "1AD13DC0-4F0D-4F5E-B16F-1D4B29E4D116";
    let ctHdx = [];

    data.CtHdx.forEach((ct) => {
      ctHdx.push({
        id: ct.id,
        maXe: ct.maXe,
        soKhung: ct.soKhung,
        soMay: ct.soMay,
        soLuong: ct.soLuong,
        thueVat: ct.thueVat,
        maKho: ct.maKho,
      });
    });

    await agent.Phieu.addPhieuXuat({
      maHdx,
      maKh,
      ngayXuat,
      maNv,
      ctHdx
    });

    dispatch(getAll());

    success("Thêm Thành Công");

    dispatch(closeModal());
  } catch (error) {
    err("Thất Bại");

    console.log(error);
  }
};

export const deleteOrder = (id) => async (dispatch) => {
  try {
    await agent.Phieu.deletePhieuXuat(id);
    dispatch({
      type: order.DELETE_ORDER,
      payload: id,
    });
    success("Xóa Thành Công");
  } catch (error) {
    err("Xóa Thất Bại");
  }
};

export const setSelectOrder = (id) => (dispatch) => {
  dispatch({
    type: order.SET_SELECT_ORDER,
    payload: id,
  });
};

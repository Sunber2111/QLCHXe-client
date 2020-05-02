import * as pur from "../constants/pur";
import agent from "../../app/api/agent";
import { success, error as err } from "../../app/notify";
import { v4 } from "uuid";
import { closeModal } from "./modal";

export const getAll = () => async (dispatch) => {
  const data = await agent.Phieu.getAllPhieuNhap();
  dispatch({
    type: pur.GET_ALL_PUR,
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

    await agent.Phieu.addPhieuNhap({
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
    await agent.Phieu.deletePhieuNhap(id);
    dispatch({
      type: pur.DELETE_PUR,
      payload: id,
    });
    success("Xóa Thành Công");
  } catch (error) {
    err("Xóa Thất Bại");
  }
};

export const setSelectOrder = (id) => (dispatch) => {
  dispatch({
    type: pur.SET_SELECT_PUR,
    payload: id,
  });
};

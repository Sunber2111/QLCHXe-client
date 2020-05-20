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
    const { maNcc } = data;

    const ngayNhap = day.toISOString();
    let ctHdn = [];

    data.CtHdn.forEach((ct) => {
      ctHdn.push({
        id: ct.id,
        maXe: ct.maXe,
        soLuong: ct.soLuong,
        thueVat: ct.thueVat,
        maKho: ct.maKho,
      });
    });

    await agent.Phieu.addPhieuNhap({
      maHdn,
      maNcc,
      ngayNhap,
      ctHdn
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

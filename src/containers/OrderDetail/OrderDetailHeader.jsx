import React from "react";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import "./header.scss";
import { convertDate } from "../../app/utils/tool";
const OrderDetailHeader = () => {
  const { isSelect } = useSelector((state) => state.order);

  return (
    <Grid className="od-header">
      <Grid className="od-header-contain">
        <p className="title">Mã Hóa Đơn :</p>
        <p>{isSelect.maHdx}</p>
      </Grid>
      <Grid className="od-header-contain">
        <p className="title">Nhân Viên :</p>
        <p>{isSelect.tenNv}</p>
      </Grid>
      <Grid className="od-header-contain">
        <p className="title">Khách Hàng :</p>
        <p>{isSelect.tenKh}</p>
      </Grid>
      <Grid className="od-header-contain">
        <p className="title">Ngày Lập :</p>
        <p>{convertDate(isSelect.ngayXuat)}</p>
      </Grid>
    </Grid>
  );
};

export default OrderDetailHeader;

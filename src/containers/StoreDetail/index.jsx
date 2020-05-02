import React from "react";
import Grid from "@material-ui/core/Grid";
import { useSelector } from "react-redux";
import ItemStore from "../ItemStore";
const StoreDetail = () => {
  const { isSelect } = useSelector((state) => state.store);

  const createData = ()=> isSelect.ctKho.map((ct) => (
    <Grid item xs={3}>
      <ItemStore car={ct} />
    </Grid>
  ));

  return (
    <Grid container spacing={2} style={{ marginTop: "20px" }}>
      {!isSelect.ctKho && <p style={{ marginLeft: "20px" }}>Chưa Chọn Kho</p>}
      {isSelect.ctKho&&(isSelect.ctKho.length >0 ? createData(): <p style={{ marginLeft: "20px" }}>Kho Trống</p>)}
    </Grid>
  );
};

export default StoreDetail;

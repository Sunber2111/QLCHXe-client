import React from "react";
import { Grid } from "semantic-ui-react";
import FormOrder from "../../../containers/FormOrder";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../../redux/actions/modal";
import TablePurs from "../../../containers/TablePurs";
import PurDetail from '../../../containers/PurDetail'
const useStyles = makeStyles({
  root: {
    background: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    height: 38,
    padding: "0 30px",
    marginLeft: "20px",
    color: "black",
  },
  root2: {
    background: "linear-gradient(to right, #d4fc79, #96e6a1)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 38,
    padding: "0 30px",
    marginLeft: "140px",
    position: "absolute",
    top: "0px",
  },
});

const PurPage = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const { isSelect } = useSelector((state) => state.order);

  const handleAdd = (e) => {
    dispatch(openModal(<FormOrder />,"large"));
  };

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={4}>
          <h3>Danh Sách Hóa Đơn Xuất</h3>
          <Button className={classes.root} onClick={handleAdd}>
            Thêm Hóa Đơn
          </Button>
          <TablePurs />
        </Grid.Column>
        <Grid.Column width={12}>
          {isSelect.maHdx ? (
            <div>
              <h3>Chi Tiết Hóa Đơn Xuất</h3>
              <PurDetail/>
            </div>
          ) : (
            <strong>Chưa Chọn Kho</strong>
          )}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default PurPage;

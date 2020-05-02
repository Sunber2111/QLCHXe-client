import React from "react";
import { Grid } from "semantic-ui-react";
import StoresTable from "../../../containers/StoresTable";
import StoreDetail from "../../../containers/StoreDetail";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../../redux/actions/modal";
import FormStore from "../../../containers/FormStore";
import FormAddCarToStore from "../../../containers/FormAddCarToStore";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(to bottom, #ff9966, #ff5e62)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 38,
    padding: "0 30px",
    marginLeft: "20px",
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

const StorePage = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const { isSelect } = useSelector((state) => state.store);


  const handleAdd = (e) => {
    
    dispatch(openModal(<FormStore />));
  };

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={5}>
          <h3>Danh Sách Kho</h3>
          <Button className={classes.root} onClick={handleAdd}>
            Thêm Kho
          </Button>
          <StoresTable />
        </Grid.Column>
        <Grid.Column width={11}>
          <h3>Chi Tiết Kho</h3>
          <Button
            disabled={(isSelect&&isSelect.maKho)? false : true}
            className={classes.root2}
            onClick={(e) => dispatch(openModal(<FormAddCarToStore />))}
          >
            Thêm Xe Vào Kho
          </Button>
          <StoreDetail />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default StorePage;

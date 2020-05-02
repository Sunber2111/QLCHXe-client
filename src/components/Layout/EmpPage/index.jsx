import React, { Fragment } from "react";
import CardsInfoEmp from "../../../containers/CardsInfoEmp";
import { Grid } from "@material-ui/core";
import "./style.scss";
import Employees from "../../../containers/Employees";
import InputFind from "../../../containers/InputFind";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { openModal } from "../../../redux/actions/modal";
import FormEmp from "../../../containers/Employees/FormEmp";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #43e97b 30%, #38f9d7 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    position: "absolute",
    right: "20%",
  },
});

const EmpPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(openModal(<FormEmp />));
  };
  return (
    <Fragment>
      <Grid container>
        <InputFind classes="emp-find" />
        <div className="cards-info-emp">
          <CardsInfoEmp />
        </div>
        <Button className={classes.root} onClick={handleClick}>
          Thêm Nhân Viên
        </Button>
        
        <div className="emps">
          <Employees />
        </div>
      </Grid>
    </Fragment>
  );
};

export default EmpPage;

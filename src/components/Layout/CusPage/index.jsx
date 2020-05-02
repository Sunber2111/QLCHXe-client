import React from "react";
import TableCustomers from "../../../containers/TableCustomers";
import { Grid } from "semantic-ui-react";
import TableOrderCus from "../../../containers/TableOrderCus";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import {  useDispatch } from "react-redux";
import { openModal } from "../../../redux/actions/modal";
import FormCustomer from "../../../containers/FormCustomer";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    marginLeft: "20px",
  },
  mygrid: {
    padding: "10px 10% !important",
  },
});

const CusPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Grid>
      <Button
        className={classes.root}
        onClick={(e) => dispatch(openModal(<FormCustomer />))}
      >
        Thêm Khách Hàng
      </Button>
      <Grid.Row>
          <Grid.Column width={10} style={{ paddingLeft: "20px" }}>
            <TableCustomers />
          </Grid.Column>
          <Grid.Column width={6}>
            <TableOrderCus />
          </Grid.Column>
        </Grid.Row>
    </Grid>
  );
};

export default CusPage;

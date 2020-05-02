import React, {  Fragment } from "react";
import {  useSelector } from "react-redux";
import { Table } from "semantic-ui-react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
const useStyles = makeStyles({
  header: {
    background: "transparent !important",
    color: "white !important",
  },
  info: {
    width: "340px",
    height: "90px",
  },
});

const TableOrderCus = () => {
  const classes = useStyles();

  const { orders } = useSelector((state) => state.customer);

  let day = new Date();
  const generateDate = (date) => {
    day = new Date(date);
    return `${day.getUTCDate()}-${
      day.getUTCMonth() <= 8
        ? "0" + (day.getUTCMonth() + 1)
        : day.getUTCMonth() + 1
    }-${day.getUTCFullYear()}`;
  };

  return (
    <Fragment>
      <Paper elevation={3} className={classes.info}>
        <div
          style={{ display: "flex", paddingLeft: "20px", paddingTop: "20px" }}
        >
          <h5 style={{ marginRight: "20px" }}>Họ Tên:</h5>
          {orders.cus&&orders.cus.tenKh}
        </div>
        <div
          style={{ display: "flex", paddingLeft: "20px", paddingTop: "20px" }}
        >
          <h5 style={{ marginRight: "20px" }}>SDT:</h5>
          {orders.cus&&orders.cus.sdt}
        </div>
      </Paper>
      <Table singleLine>
        <Table.Header>
          <Table.Row
            style={{
              background: "linear-gradient(to right, #ff512f, #f09819)",
            }}
          >
            <Table.HeaderCell className={classes.header}>STT</Table.HeaderCell>
            <Table.HeaderCell className={classes.header}>
              Mã Hóa Đơn
            </Table.HeaderCell>
            <Table.HeaderCell className={classes.header}>
              Ngày Mua Hàng
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {orders.data&&orders.data.map((order, index) => (
            <Table.Row>
              <Table.Cell>{index + 1}</Table.Cell>
              <Table.Cell>{order.maHdx}</Table.Cell>
              <Table.Cell>{generateDate(order.ngayXuat)}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Fragment>
  );
};

export default TableOrderCus;

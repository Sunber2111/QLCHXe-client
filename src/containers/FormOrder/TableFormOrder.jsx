import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import swal from "sweetalert";
import { deleteOrder } from "../../redux/actions/order";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { setSelectOrder } from "../../redux/actions/order";

const useStyles = makeStyles({
  delete: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 30,
    padding: "0 10px",
  },
  update: {
    background: "linear-gradient(45deg, #4facfe 30%, #00f2fe 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 30,
    padding: "0 10px",
  },
});

const TableFormOrder = ({ orders }) => {
  console.log(orders);

  const [page, setPage] = useState(0);

  const [rowsPerPage, setRowsPerPage] = useState(10);

  const dispatch = useDispatch();

  const classes = useStyles();

  const columns = [
    { id: "index", label: "Tên Kho", maxWidth: 50 },
    { id: "tenxe", label: "Tên Xe", maxWidth: 80 },
    { id: "tenkho", label: "Số Lượng", maxWidth: 80 },
    { id: "sokhung", label: "Số Khung", maxWidth: 80 },
    { id: "somay", label: "Số Máy", maxWidth: 80 },
    { id: "thue", label: "VAT", maxWidth: 80 },
    { id: "delete", label: "Xóa", maxWidth: 50, align: "center" },
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const onDelete = (id) => {
    swal({
      title: "Bạn Muốn Xóa Hóa Đơn Này ?",
      icon: "warning",
      dangerMode: true,
      buttons: ["Cancel", "Yes"],
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteOrder(id));
      }
    });
  };

  const onClick = (id) => {
    dispatch(setSelectOrder(id));
  };

  return (
    <Paper className="table-car-cate">
      <TableContainer className="table-car-cate-container">
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {orders &&
              orders
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.maLoaiXe}
                      onClick={(e) => onClick(row.maHdx)}
                    >
                      <TableCell key={columns[0].id} align={columns[0].align}>
                        {row.tenKho}
                      </TableCell>
                      <TableCell key={columns[1].id} align={columns[1].align}>
                        {row.tenXe}
                      </TableCell>
                      <TableCell key={columns[2].id} align={columns[2].align}>
                        {row.soLuong}
                      </TableCell>
                      <TableCell key={columns[3].id} align={columns[3].align}>
                        {row.soKhung}
                      </TableCell>
                      <TableCell key={columns[4].id} align={columns[4].align}>
                        {row.soMay}
                      </TableCell>
                      <TableCell key={columns[5].id} align={columns[6].align}>
                        {row.thueVat}
                      </TableCell>
                      <TableCell key={columns[6].id} align={columns[6].align}>
                        <IconButton
                          aria-label="xóa"
                          className={classes.delete}
                          onClick={() => onDelete(row)}
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={orders && orders.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default TableFormOrder;

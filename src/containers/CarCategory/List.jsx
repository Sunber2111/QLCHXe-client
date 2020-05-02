import React, { useState, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../redux/actions/category";
import "./listStyle.scss";
import { makeStyles } from "@material-ui/core/styles";
import swal from "sweetalert";
import { deleteCategory } from "../../redux/actions/category";
import { openModal } from "../../redux/actions/modal";
import FormCategory from "./FormCategory";
import IconButton from "@material-ui/core/IconButton";
import BackupIcon from "@material-ui/icons/Backup";
import DeleteIcon from "@material-ui/icons/Delete";

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

const List = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);
  const classes = useStyles();

  const columns = [
    { id: "index", label: "STT", maxWidth: 50 },
    { id: "name", label: "Tên Loại", maxWidth: 80 },
    { id: "update", label: "Sửa", maxWidth: 50, align: "center" },
    { id: "delete", label: "Xóa", maxWidth: 50, align: "center" },
  ];

  useEffect(() => {
    dispatch(getAll());
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const onDelete = (id) => {
    swal({
      title: "Bạn Muốn Xóa Loại Xe Này ?",
      icon: "warning",
      dangerMode: true,
      buttons: ["Cancel", "Yes"],
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteCategory(id));
      }
    });
  };

  const onUpdate = (loaixe) => {
    dispatch(openModal(<FormCategory loaixe={loaixe} />));
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
            {categories &&
              categories
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.maLoaiXe}
                    >
                      <TableCell key={columns[0].id} align={columns[0].align}>
                        {index + 1}
                      </TableCell>
                      <TableCell key={columns[1].id} align={columns[1].align}>
                        {row.tenLoaiXe}
                      </TableCell>
                      <TableCell key={columns[2].id} align={columns[2].align}>
                        <IconButton
                          aria-label="sửa"
                          className={classes.update}
                          onClick={() => onUpdate(row)}
                        >
                          <BackupIcon fontSize="small" />
                        </IconButton>
                      </TableCell>
                      <TableCell key={columns[3].id} align={columns[3].align}>
                        <IconButton
                          aria-label="xóa"
                          className={classes.delete}
                          onClick={() => onDelete(row.maLoaiXe)}
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
        count={categories && categories.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default List;

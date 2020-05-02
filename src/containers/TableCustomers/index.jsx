import React, { useEffect } from "react";
import { Table } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { getAll, deleteCus } from "../../redux/actions/customer";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import BackupIcon from "@material-ui/icons/Backup";
import DeleteIcon from "@material-ui/icons/Delete";
import { getOrder } from "../../redux/actions/customer";
import FormCustomer from "../FormCustomer";
import { openModal } from "../../redux/actions/modal";
import swal from "sweetalert";

const useStyles = makeStyles({
  header: {
    background: "transparent !important",
  },
  delete: {
    background: "linear-gradient(to right, #cb2d3e, #ef473a)",
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

const TableCustomers = () => {
  const dispatch = useDispatch();

  const classes = useStyles();

  const { cuses } = useSelector((state) => state.customer);

  useEffect(() => {
    dispatch(getAll());
  }, []);

  let day = new Date();

  const handleDelete = (id,name) => {
    swal({
      title: `Bạn Muốn Xóa khách hàng ${name} ?`,
      icon: "warning",
      dangerMode: true,
      buttons: ["Cancel", "Yes"],
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteCus(id));
      }
    });
  };

  const generateDate = (date) => {
    day = new Date(date);
    return `${day.getUTCDate()}-${
      day.getUTCMonth() <= 8
        ? "0" + (day.getUTCMonth() + 1)
        : day.getUTCMonth() + 1
    }-${day.getUTCFullYear()}`;
  };

  return (
    <Table singleLine>
      <Table.Header>
        <Table.Row
          style={{
            backgroundImage:
              "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)",
          }}
        >
          <Table.HeaderCell className={classes.header}>Họ Tên</Table.HeaderCell>
          <Table.HeaderCell className={classes.header}>
            Số Điện Thoại
          </Table.HeaderCell>
          <Table.HeaderCell className={classes.header}>
            Giới Tính
          </Table.HeaderCell>
          <Table.HeaderCell className={classes.header}>
            Ngày Sinh
          </Table.HeaderCell>
          <Table.HeaderCell className={classes.header}>
            Địa Chỉ
          </Table.HeaderCell>
          <Table.HeaderCell className={classes.header}></Table.HeaderCell>
          <Table.HeaderCell className={classes.header}></Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {cuses.map((cus) => (
          <Table.Row onClick={() => dispatch(getOrder(cus.maKh))}>
            <Table.Cell>{cus.tenKh}</Table.Cell>
            <Table.Cell>{cus.sdt}</Table.Cell>
            <Table.Cell>{cus.gioiTinh ? "Nam" : "Nữ"}</Table.Cell>
            <Table.Cell>{generateDate(cus.ngaySinh)}</Table.Cell>
            <Table.Cell>{cus.diaChi}</Table.Cell>
            <Table.Cell>
              <IconButton
                aria-label="sửa"
                className={classes.update}
                onClick={(e) => {
                  cus.ngaySinh = cus.ngaySinh.slice(0, 10);
                  dispatch(openModal(<FormCustomer cus={cus} />));
                }}
              >
                <BackupIcon fontSize="small" />
              </IconButton>
            </Table.Cell>
            <Table.Cell>
              <IconButton
                aria-label="xóa"
                className={classes.delete}
                onClick={() => handleDelete(cus.maKh,cus.tenKh)}
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default TableCustomers;

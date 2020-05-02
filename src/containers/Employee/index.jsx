import React from "react";
import { Segment } from "semantic-ui-react";
import "./style.scss";
import { useDispatch } from "react-redux";
import { Image, Button } from "semantic-ui-react";
import { deleteEmp } from "../../redux/actions/employee";
import FormEmp from '../Employees/FormEmp'
import {openModal} from '../../redux/actions/modal'
import swal from "sweetalert";

const Employee = ({ emp }) => {
  const dispatch = useDispatch();

  const handleDelete = (id,name) => {
    swal({
      title:`Bạn Muốn Xóa nhân viên ${name} ?`,
      icon: "warning",
      dangerMode: true,
      buttons: ["Cancel", "Yes"],
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteEmp(id));
      }
    });
  };
  const handleUpdate = (emp) =>{
    emp.ngaySinh = emp.ngaySinh.slice(0,10);
    dispatch(openModal(<FormEmp emp={emp} />))
  }
  return (
    <Segment className="card-emp">
      <div className="card-emp-header">
        <Image src={emp.hinh} avatar />
        <div className="info">
          <div className="info-content">
            <p className="info-header">Họ Tên :</p>
            <p className="info-detail">{emp.tenNv}</p>
          </div>
          <div className="info-content">
            <p className="info-header"> Tuổi :</p>
            <p className="info-detail">{emp.tuoi}</p>
          </div>
          <div className="info-content">
            <p className="info-header">Giới Tính :</p>
            <p className="info-detail">{emp.gioiTinh ? "Nam" : "Nữ"}</p>
          </div>
          <div className="info-content">
            <p className="info-header">Vị Trí :</p>
            <p className="info-detail">{emp.chucVu}</p>
          </div>
        </div>
      </div>
      <div className="card-emp-btn-grp">
        <Button
          basic
          color="red"
          className="btn-left"
          onClick={(e) => handleDelete(emp.maNv,emp.tenNv)}
        >
          Xoá
        </Button>
        <Button basic color="blue" onClick={()=>handleUpdate(emp)} className="btn-right">
          Sửa
        </Button>
      </div>
    </Segment>
  );
};

export default Employee;

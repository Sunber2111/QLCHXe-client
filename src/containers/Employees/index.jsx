import React, { Fragment, useEffect } from "react";
import Employee from "../Employee";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../redux/actions/employee";
const Employees = () => {
  const { emps } = useSelector((state) => state.employee);
  const year = new Date().getFullYear();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll());
  }, []);

  const convertToAge = (date) => {
    return year - parseInt(date.slice(0, 4));
  };

  return (
    <Fragment>
      {emps.map((emp) => {
        emp.tuoi = convertToAge(emp.ngaySinh);
        return <Employee emp={emp} key={emp.maNv} />;
      })}
    </Fragment>
  );
};

export default Employees;

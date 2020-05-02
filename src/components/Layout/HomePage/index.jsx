import React from "react";
import "./style.scss";
import logo from "../../../app/images/logo.png";
import bg from "../../../app/images/16.jpg";
import { Button } from 'semantic-ui-react'
const HomePage = () => {
  return (
    <div className="Home">
      <img src={logo} className="logo" />
      <p className="t1">Cửa Hàng Xe</p>
      <p className="t2">Anh Hòa</p>
      <p className="des">Cửa hàng xe Anh Hòa tại địa chỉ 24/6 Trần Kế Xương, Quận Tân Phú, TP.HCM.
          Đăng Nhập để thêm nhiều tính năng
      </p>
      <Button className="btn-home">Đăng Nhập</Button>
      <img src={bg} className="bg" />
    </div>
  );
};

export default HomePage;

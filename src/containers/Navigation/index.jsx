import React from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import "./style.scss";
const Navigation = () => {
  return (
    <Menu pointing secondary className="my-menu">
      <Menu.Item as={NavLink} to="/trangchu">
        Trang Chủ
      </Menu.Item>
      <Menu.Item as={NavLink} to="/xe">
        Xe
      </Menu.Item>
      <Menu.Item as={NavLink} to="/khachhang">
        Khách Hàng
      </Menu.Item>
      <Menu.Item as={NavLink} to="/nhanvien">
        Nhân Viên
      </Menu.Item>
      <Menu.Item as={NavLink} to="/kho">
        Kho
      </Menu.Item>
      <Menu.Item as={NavLink} to="/phieuxuat">
        Hóa Đơn Xuất
      </Menu.Item>
      <Menu.Item as={NavLink} to="/phieunhap">
        Hóa Đơn Nhập
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item as={NavLink} to="/dangxuat">
          Đăng Xuất
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default Navigation;

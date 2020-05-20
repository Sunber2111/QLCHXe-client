import React from "react";
import { Menu, Layout } from "antd";
import {
  UserAddOutlined,
  PieChartOutlined,
  CarOutlined,
  ContainerOutlined,
  SaveOutlined,
  SolutionOutlined,
  ShopOutlined,
  BranchesOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import logo from "../../app/images/logo.png";
import "./style.scss";
const { Sider } = Layout;
const { SubMenu } = Menu;

const Navigation = () => {
  const { open } = useSelector((s) => s.nav);

  return (
    <Sider trigger={null} collapsed={open} theme="dark" width="250px">
      <div className="img-logo">
        <div className="cover-logo">
          <img src={logo} alt="logo" />
        </div>{" "}
        {!open && <h2>Anh Hòa Store</h2>}
      </div>
      <Menu mode="inline" theme="dark">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          <a href="https://localhost:5000" target="_blank" rel="noopener noreferrer">
            Biểu Đồ Doanh Thu
          </a>
        </Menu.Item>
        <Menu.Item key="2" icon={<CarOutlined />}>
          Xe
        </Menu.Item>
        <SubMenu key="sub1" icon={<ContainerOutlined />} title="Hóa Đơn">
          <Menu.Item key="5">Phiếu Xuất</Menu.Item>
          <Menu.Item key="6">Phiếu Thu</Menu.Item>
        </SubMenu>
        <Menu.Item key="4" icon={<UserAddOutlined />}>
          Nhân Viên
        </Menu.Item>
        <Menu.Item key="7" icon={<SaveOutlined />}>
          Nhà Cung Cấp
        </Menu.Item>
        <Menu.Item key="8" icon={<SolutionOutlined />}>
          Khách Hàng
        </Menu.Item>
        <Menu.Item key="9" icon={<ShopOutlined />}>
          Kho
        </Menu.Item>
        <Menu.Item key="10" icon={<BranchesOutlined />}>
          Bảo Hành
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Navigation;

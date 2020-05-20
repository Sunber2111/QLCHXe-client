import React, { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "antd/dist/antd.css";
import "./css2.css";
import "./style.scss";
import Navigation from "../../containers/Navigation";
import { Layout } from "antd";
import HeaderNav from "../../containers/Header";
import CarPage from "../../papes/car";
import ModalContainer from "../../containers/ModalContainer";
import EmpPape from "../../papes/emp";
import ModalMruContainer from "../../containers/ModalMruContainer";
import CusPage from "../../papes/cus";
import SupPage from "../../papes/sup";
import AccountPage from "../../papes/account";
import PurchasingPage from "../../papes/pur";
const { Content } = Layout;

const App = () => {

  return (
    <Fragment>
      <Layout className="main-content">
        <Navigation />
        <Layout className="site-layout">
          <HeaderNav />
          <Content
            className="site-layout-background"
            style={{
              margin: "16px",
              padding: 10,
              minHeight: 280,
            }}
          >
            <PurchasingPage/>
          </Content>
        </Layout>
      </Layout>
      <ModalContainer />
      <ToastContainer />
      <ModalMruContainer />
    </Fragment>
  );
};

export default App;

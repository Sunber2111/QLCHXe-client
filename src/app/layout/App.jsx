import React, { Fragment } from "react";
import Navigation from "../../containers/Navigation";
import "./style.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CarPage from "../../components/Layout/CarPage";
import ModalsContainer from "../../containers/Modal/ModalsContainer";
import EmpPage from "../../components/Layout/EmpPage";
import { Route, Switch } from "react-router-dom";
import CusPage from "../../components/Layout/CusPage";
import StorePage from "../../components/Layout/StorePage";
import OrderPage from "../../components/Layout/OrderPage";
import PurPage from "../../components/Layout/PurPage";
import HomePage from "../../components/Layout/HomePage";
const App = () => {
  return (
    <Fragment>
      <Route exact path="/" component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <Fragment>
            <Navigation />
            <div className="contain">
              <Switch>
                <Route exact path="/xe" component={CarPage} />
                <Route exact path="/nhanvien" component={EmpPage} />
                <Route exact path="/khachhang" component={CusPage} />
                <Route exact path="/kho" component={StorePage} />
                <Route exact path="/phieuxuat" component={OrderPage} />
                <Route exact path="/phieunhap" component={PurPage} />
              </Switch>
            </div>
          </Fragment>
        )}
      />
      <ModalsContainer />
      <ToastContainer />
    </Fragment>
  );
};

export default App;

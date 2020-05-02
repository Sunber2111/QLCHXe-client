import React, { Fragment, useState, useEffect } from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import { useSelector, useDispatch } from "react-redux";
import { getAll } from "../../redux/actions/customer";
import { getAll as getAllStore } from "../../redux/actions/store";
import { submit } from '../../redux/actions/order'
import "./style.scss";
import { Button, Icon, Label } from "semantic-ui-react";
import TextField from "@material-ui/core/TextField";
import TableFormOrder from "./TableFormOrder";
import { v4 } from "uuid";

const FormOrder = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    maKh: "",
    sdt: "",
    soMay: "",
    soKhung: "",
    thueVat: 0,
    CtHdx: [],
  });

  const [cars, setCars] = useState([]);

  const [sl, setSl] = useState(0);

  const [car, setCar] = useState({ maXe: "", tenXe: "", gia: 0 });

  const [store, setStore] = useState({ maKho: "", tenKho: "" });

  useEffect(() => {
    dispatch(getAll());
    dispatch(getAllStore());
  }, []);

  const { stores } = useSelector((state) => state.store);

  const { cuses } = useSelector((state) => state.customer);

  const handleChange = (e) => {
    const { sdt } = cuses.find((x) => x.maKh === e.target.value);
    setData({ ...data, [e.target.name]: e.target.value, sdt });
  };

  const handleChangeStore = (e) => {
    const { ctKho, tenKho } = stores.find((x) => x.maKho === e.target.value);
    setCars([...ctKho]);
    setStore({ ...store, maKho: e.target.value, tenKho });
  };

  const handleCarChange = (e) => {
    const { tenXe, gia } = cars.find((x) => x.maXe === e.target.value);
    setCar({ maXe: e.target.value, tenXe, gia });
  };

  const handleAdd = (e) => {
    const { maXe, tenXe, gia } = car;
    const { maKho, tenKho } = store;
    const { soMay, soKhung, thueVat } = data;
    //  maXe: "",
    //  soKhung: "",
    //  soMay: "",
    //  soLuong: 0,
    //  thueVat: 0,
    //  maKho: "",
    const thue = parseInt(thueVat);
    const ct = {
      maXe,
      maKho,
      soMay,
      soKhung,
      soLuong: sl,
      thueVat: thue,
      tenXe,
      tenKho,
      id: v4(),
      gia,
    };
    data.CtHdx.push(ct);
    setData({ ...data });
  };

  const handleSubmit = (e) => {
    dispatch(submit(data));
  };

  return (
    <Fragment>
      <div style={{ display: "flex", width: "100% !important" }}>
        <form>
          <div className="customer-div">
            <FormControl className="form-od-header">
              <InputLabel>Chọn Khách Hàng</InputLabel>
              <Select name="maKh" value={data.maKh} onChange={handleChange}>
                {cuses.map((cus) => (
                  <MenuItem value={cus.maKh} key={cus.maKh}>
                    {cus.tenKh}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <div className="sdt">Số Điện Thoại: {data.sdt}</div>
          </div>
          <div className="xcx">
            <TextField
              className="form-od-header"
              label="Số Khung"
              value={data.soKhung}
              onChange={(e) => setData({ ...data, soKhung: e.target.value })}
              variant="outlined"
            />
            <TextField
              className="form-od-header"
              id="outlined-basic"
              label="Số Máy"
              value={data.soMay}
              onChange={(e) => setData({ ...data, soMay: e.target.value })}
              variant="outlined"
            />
          </div>
        </form>

        <div className="s2">
          <FormControl className="form-od-header-s2">
            <InputLabel>Chọn Kho</InputLabel>
            <Select
              name="maKh"
              value={store.maKho}
              onChange={handleChangeStore}
            >
              {stores.map((sto) => (
                <MenuItem value={sto.maKho} key={sto.maKho}>
                  {sto.tenKho}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className="form-od-header-s2">
            <InputLabel>Chọn Xe</InputLabel>
            <Select name="maXe" value={car.maXe} onChange={handleCarChange}>
              {cars.map((car) => (
                <MenuItem value={car.maXe} key={car.maXe}>
                  {car.tenXe}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            className="form-od-header-s2"
            name="soluong"
            type="number"
            label="Số Lượng"
            value={sl}
            onChange={(e) => setSl(parseInt(e.target.value))}
          />
          <TextField
            className="form-od-header-s1"
            name="thueVat"
            type="number"
            label="VAT"
            value={data.thueVat}
            onChange={(e) => setData({ ...data, thueVat: e.target.value })}
          />
          <Button as="div" labelPosition="right" onClick={handleAdd}>
            <Button color="red">
              <Icon name="heart" />
              Thêm Vào Giỏ Hàng
            </Button>
            <Label as="a" basic color="red" pointing="left">
              {data.CtHdx.length}
            </Label>
          </Button>
        </div>
      </div>
      <h3>Chi Tiết Những Sản Phẩm</h3>
      <TableFormOrder orders={data.CtHdx} />
      <div style={{ marginTop: "20px" }}>
        <h3>Tổng Tiền:</h3>
        <p>
          {data.CtHdx.reduce(
            (s, v) => v.gia * v.soLuong * (1 + v.thueVat / 100) + s,
            0
          ).toFixed(0)}
        </p>
      </div>
      <Button floated="right" color="facebook" onClick={handleSubmit}>
        Submit
      </Button>
    </Fragment>
  );
};

export default FormOrder;

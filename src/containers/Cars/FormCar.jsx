import React, { useState, Fragment } from "react";
import { useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";
import { Button } from "semantic-ui-react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import { submit } from "../../redux/actions/car";

const useStyle = makeStyles({
  btn: {
    marginTop: "20px !important",
    marginBottom: "20px !important",
  },
  box: {
    width: 20,
    height: 20,
    display: "inline-block",
    marginTop: 17,
    marginLeft: 20,
  },
  formControl: {
    minWidth: 120,
    position: "absolute",
    right: 20,
  },
});

const FormCar = ({ car }) => {
  const dispatch = useDispatch();

  const [data, setData] = useState(
    car
      ? { ...car }
      : {
          tenXe: "",
          mau: "",
          hinh: "",
          gia: 0,
          maLoaiXe: "",
        }
  );

  const { categories } = useSelector((state) => state.category);

  const onSubmit = (e) => {
    data.gia = parseFloat(data.gia);
    dispatch(submit(data));
  };

  const submitForm = (e) => {
    e.preventdefault();
  };

  const classes = useStyle();

  return (
    <Fragment>
      <form onSubmit={submitForm}>
        <TextField
          name="tenXe"
          label="Tên Xe"
          value={data.tenXe}
          onChange={(e) =>
            setData({ ...data, [e.target.name]: e.target.value })
          }
          fullWidth
        />
        <TextField
          name="gia"
          type="number"
          label="Giá"
          value={data.gia}
          onChange={(e) =>
            setData({ ...data, [e.target.name]: e.target.value })
          }
          fullWidth
        />
        <div>
          <TextField
            name="mau"
            label="Màu"
            value={data.mau}
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
          />
          <div
            className={classes.box}
            style={{ backgroundColor: data.mau ? data.mau : "black" }}
          ></div>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Loại Xe</InputLabel>
            <Select
              name="maLoaiXe"
              value={data.maLoaiXe}
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
            >
              {categories.map((cate) => (
                <MenuItem value={cate.maLoaiXe} key={cate.maLoaiXe}>
                  {cate.tenLoaiXe}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </form>

      <Button
        color="google plus"
        onClick={onSubmit}
        className={classes.btn}
        floated="right"
      >
        {car ? "Sửa" : "Thêm"}
      </Button>
    </Fragment>
  );
};

export default FormCar;

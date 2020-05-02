import React, { useState, Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import { getAll } from "../../redux/actions/car";
import { submitDetailStore } from "../../redux/actions/store";
import "./style.scss";
import TextField from "@material-ui/core/TextField";
import { Button } from "semantic-ui-react";

const FormAddCarToStore = ({ ctKho }) => {
  
  const dispatch = useDispatch();

  const { cars } = useSelector((state) => state.car);

  const { isSelect } = useSelector((state) => state.store);

  const [data, setData] = useState(ctKho ? { id:ctKho.id,maXe:ctKho.maXe,soluong:ctKho.soluong } : { maXe: "", soluong: 0 });


  useEffect(() => {
    dispatch(getAll());
  }, []);

  const handleSubmit = (e) => {
    dispatch(submitDetailStore({ ...data, maKho: isSelect.maKho }));
  };

  return (
    <Fragment>
      <form className="add-car-to-store">
        {!ctKho ? (
          <FormControl>
            <InputLabel>Xe</InputLabel>
            <Select
              className="list-car"
              name="maXe"
              value={data.maXe}
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
            >
              {cars.map((car) => (
                <MenuItem value={car.maXe} key={car.maXe}>
                  {car.tenXe}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        ):<p>Tên Xe: {ctKho.tenXe}</p>
        }
        <TextField
          className="price"
          name="soluong"
          type="number"
          style={{position:"absolute",top:"20px"}}
          label="Số Lượng"
          value={data.soluong}
          onChange={(e) =>
            setData({ ...data, [e.target.name]: e.target.value })
          }
        />
      </form>
      <Button
        className="btnACTC"
        color="google plus"
        floated="right"
        style={{marginTop:"20px"}}
        onClick={handleSubmit}
      >
        submit
      </Button>
    </Fragment>
  );
};

export default FormAddCarToStore;

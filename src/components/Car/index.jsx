import React from "react";
import { Paper, Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Label } from "semantic-ui-react";
import "./style.scss";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import { deleteCar } from "../../redux/actions/car";
import { openModal } from "../../redux/actions/modal";
import FormCar from "../../containers/Cars/FormCar";

const Color = ({ index }) => {
  return <div className="color" style={{ backgroundColor: index }}></div>;
};

const Car = ({ data }) => {

  const dispatch = useDispatch();

  const onDelete = (id) => {
    swal({
      title: "Bạn Muốn Xóa Xe Này ?",
      icon: "warning",
      dangerMode: true,
      buttons: ["Cancel", "Yes"],
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteCar(id));
      }
    });
  };

  const onUpdate = (car) => {
    dispatch(openModal(<FormCar car={car} />));
  };

  return (
    <Grid item xs={3} className="car">
      <img src={data.hinh} alt="img car" />
      <Paper className="des">
        <h3>{data.tenXe}</h3>
        <p>Màu:</p>
        <Color index={data.mau} />
        <div>
          <p>
            Giá:{" "}
            <Label as="a" color="red" tag>
              {data.gia}
            </Label>
          </p>
        </div>
        <div className="btn-gr">
          <Button color="primary" onClick={() => onUpdate(data)}>
            Sửa
          </Button>
          <Button
            color="primary"
            floated="right"
            onClick={() => onDelete(data.maXe)}
          >
            Xóa
          </Button>
        </div>
      </Paper>
    </Grid>
  );
};

export default Car;

import React, { Fragment, useEffect } from "react";
import Car from "../../components/Car";
import { useSelector, useDispatch } from "react-redux";
import { Grid } from "@material-ui/core";
import { Label, Segment, Button } from "semantic-ui-react";
import { getAll } from "../../redux/actions/car";
import { openModal } from '../../redux/actions/modal'
import FormCar from "./FormCar";

const Cars = () => {
  const { cars } = useSelector((state) => state.car);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAll());
  }, []);

  return (
    <Fragment>
      <Label color="yellow" style={{ marginBottom: "20px" }}>
          <h2>Danh Sách Xe</h2>
        </Label>
        <Button onClick={(e)=>dispatch(openModal(<FormCar/>))} color="red" style={{marginLeft:"20px"}}>Thêm Xe</Button>
        <Grid container spacing={3}>
          {
            cars&&cars.map((car)=><Car key={car.maXe} data={car} />)
          }
        </Grid>
    </Fragment>
  );
};

export default Cars;

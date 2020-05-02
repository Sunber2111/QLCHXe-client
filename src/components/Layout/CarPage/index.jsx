import React from "react";
import CarCategory from "../../../containers/CarCategory";
import Grid from "@material-ui/core/Grid";
import "./style.scss";
import Cars from "../../../containers/Cars";

const CarPage = () => {
  return (
    <Grid container spacing={3} className="car-page">
      <Grid item xs={3} className="car-page-category">
        <CarCategory />
      </Grid>
      <Grid item xs={9}>
        <Cars/>
      </Grid>
    </Grid>
  );
};

export default CarPage;

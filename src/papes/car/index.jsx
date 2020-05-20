import React from "react";
import "./style.scss";
import { Grid, Segment } from "semantic-ui-react";
import CategoryTable from "../../containers/CategoryTable";
import CarTable from "../../containers/CarTable";

const CarPage = () => {
  return (
    <Grid>
      <Grid.Column width={4} className="bg-clear-1">
        <Segment className="bg-clear">
          <CategoryTable />
        </Segment>
      </Grid.Column>
      <Grid.Column width={12}>
        <CarTable />
      </Grid.Column>
    </Grid>
  );
};

export default CarPage;

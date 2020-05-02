import React, { Fragment } from "react";
import Paper from "@material-ui/core/Paper";
import "./style.scss";

const CardInfo = ({ icon, sum, mess, color }) => {
  return (
    <Fragment>
      <Paper className="card" style={{backgroundImage:color}}>
        <div>
          <img src={icon} className="card-icon" alt="info card" />
          <h1>{sum}</h1>
        </div>
        <p>{mess}</p>
      </Paper>
    </Fragment>
  );
};

export default CardInfo;

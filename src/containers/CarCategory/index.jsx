import React from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import List from "./List";
import "./style.scss";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/actions/modal";
import FormCategory from "./FormCategory";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #43e97b 30%, #38f9d7  90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
});

const CarCategory = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleopenModal = () => {
    dispatch(openModal(<FormCategory />));
  };

  return (
    <Paper elevation={3} className="car-cate">
      <div>
        <h2 className="title-car-cate">Loại Xe</h2>
        <Button
          onClick={handleopenModal}
          className={`btnAdd-car-cate ${classes.root}`}
        >
          Thêm Loại Xe
        </Button>
        <Paper>
          <List />
        </Paper>
      </div>
    </Paper>
  );
};

export default CarCategory;

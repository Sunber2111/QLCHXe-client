import React, { useState, Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "semantic-ui-react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { submit } from "../../redux/actions/category";

const useStyle = makeStyles({
  btn: {
    marginTop: "20px !important",
    marginBottom: "20px !important",
  },
});

const FormCategory = ({ loaixe }) => {
  const classes = useStyle();
  const [name, setName] = useState(
    loaixe && loaixe.tenLoaiXe !== null ? loaixe.tenLoaiXe : ""
  );
  const dispatch = useDispatch();
  const onSubmit = (e) => {

    loaixe ? dispatch(submit({maLoaiXe:loaixe.maLoaiXe,tenLoaiXe:name})) : dispatch(submit({ tenLoaiXe: name }));
  };
  const submitForm = (e) => {
    e.preventdefault();
  };
  return (
    <Fragment>
      <form onSubmit={submitForm}>
        <TextField
          id="category"
          label="Tên Loại Xe"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
        />
      </form>

      <Button
        disabled={name !== null && name !== "" ? false : true}
        color="google plus"
        onClick={onSubmit}
        className={classes.btn}
        floated="right"
      >
        {loaixe ? "Sửa" : "Thêm"}
      </Button>
    </Fragment>
  );
};

export default FormCategory;

import React, { useState, Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "semantic-ui-react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { submit } from "../../redux/actions/store";

const useStyle = makeStyles({
  btn: {
    marginTop: "20px !important",
    marginBottom: "20px !important",
  },
});

const FormStore = ({ kho }) => {

  const classes = useStyle();

  const [name, setName] = useState(
    (kho && kho.tenKho !== null) ? kho.tenKho : ""
  );

  const dispatch = useDispatch();

  const onSubmit = (e) => {

    kho ? dispatch(submit({maKho:kho.maKho,tenKho:name})) : dispatch(submit({ tenKho: name }));
  };
  const submitForm = (e) => {
    e.preventdefault();
  };
  return (
    <Fragment>
      <form onSubmit={submitForm}>
        <TextField
          label="Tên Kho"
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
        {kho ? "Sửa" : "Thêm"}
      </Button>
    </Fragment>
  );
};

export default FormStore;

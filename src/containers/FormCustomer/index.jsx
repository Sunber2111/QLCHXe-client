import React, { useState, Fragment } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { submit } from "../../redux/actions/customer";

const useStyles = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  icon: {
    borderRadius: "50%",
    width: 16,
    height: 16,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "#f5f8fa",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: "#ebf1f5",
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)",
    },
  },
  checkedIcon: {
    backgroundColor: "#137cbd",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: "#106ba3",
    },
  },
  header: {
    display: "flex !important",
  },
  bg: {
    margin: "0 !important",
    padding: "0 !important",
  },
  img: {
    width: "20%",
  },
});

function StyledRadio(props) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

const FormCustomer = ({ cus }) => {
  let today = new Date();

  const [data, setData] = useState(
    cus
      ? cus
      : {
          tenNv: "",
          gioiTinh: true,
          diaChi: "",
          sdt: "",
          cmnd: "",
          chucVu: "",
          ngaySinh: `${today.getUTCFullYear()}-${
            today.getUTCMonth() <= 8
              ? "0" + (today.getUTCMonth() + 1)
              : today.getUTCMonth()
          }-${today.getUTCDate()}`,
        }
  );

  const dispatch = useDispatch();
  const submitForm = (e) => {
    e.preventdefault();
  };

  const onSubmit = () => {
    data.ngaySinh = new Date(data.ngaySinh).toISOString();
    dispatch(submit(data));
  };

  return (
    <Fragment>
      <form onSubmit={submitForm}>
        <TextField
          name="tenKh"
          label="Tên Khách Hàng"
          value={data.tenKh}
          style={{ marginBottom: "14px" }}
          onChange={(e) =>
            setData({ ...data, [e.target.name]: e.target.value })
          }
          fullWidth
        />
        <TextField
          name="diaChi"
          label="Địa Chỉ"
          value={data.diaChi}
          style={{ marginBottom: "14px" }}
          onChange={(e) =>
            setData({ ...data, [e.target.name]: e.target.value })
          }
          fullWidth
        />
        <TextField
          name="cmnd"
          label="CMND"
          value={data.cmnd}
          style={{ marginBottom: "14px" }}
          onChange={(e) =>
            setData({ ...data, [e.target.name]: e.target.value })
          }
          fullWidth
        />
        <TextField
          name="sdt"
          label="Số Điện Thoại"
          value={data.sdt}
          style={{ marginBottom: "14px" }}
          onChange={(e) =>
            setData({ ...data, [e.target.name]: e.target.value })
          }
          fullWidth
        />
        <FormControl component="fieldset" style={{ marginTop: "14px" }}>
          <FormLabel component="legend">Giới Tính</FormLabel>
          <RadioGroup
            defaultValue="female"
            aria-label="gender"
            name="customized-radios"
          >
            <FormControlLabel
              value={true}
              checked={data.gioiTinh === true}
              onChange={() => setData({ ...data, gioiTinh: true })}
              control={<StyledRadio />}
              label="Nam"
            />
            <FormControlLabel
              value={false}
              onChange={() => setData({ ...data, gioiTinh: false })}
              checked={data.gioiTinh === false}
              control={<StyledRadio />}
              label="Nữ"
            />
          </RadioGroup>
        </FormControl>
        <TextField
          style={{ position: "absolute", right: "20px", marginTop: "14px" }}
          label="Ngày Sinh"
          type="date"
          defaultValue={data.ngaySinh}
          onChange={(e) => {
            setData({ ...data, ngaySinh: e.target.value });
          }}
        />
      </form>
      <Button color="google plus" onClick={onSubmit} floated="right">
        Submit
      </Button>
    </Fragment>
  );
};

export default FormCustomer;

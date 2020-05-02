import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import swal from "sweetalert";
import { deleteDS } from "../../redux/actions/store";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/actions/modal";
import FormAddCarToStore from "../FormAddCarToStore";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
});

const ItemStore = ({ car }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  
  
  const handleDelete = (id) => {
    swal({
      title: `Bạn Muốn xe này ?`,
      icon: "warning",
      dangerMode: true,
      buttons: ["Cancel", "Yes"],
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteDS(id));
      }
    });
  };

  const handleUpdate = (e) => {
    dispatch(openModal(<FormAddCarToStore ctKho={{id:car.id,tenXe:car.tenXe,soluong:car.soluong,maXe:car.maXe}} /> ))
  };
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={car.hinh}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {car.tenXe}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Giá : {car.gia}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleUpdate}>
          Sửa
        </Button>
        <Button
          size="small"
          color="inherit"
          onClick={() => handleDelete(car.id)}
        >
          Xóa
        </Button>
      </CardActions>
    </Card>
  );
};

export default React.memo(ItemStore);

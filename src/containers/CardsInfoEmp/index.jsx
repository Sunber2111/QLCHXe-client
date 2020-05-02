import React from "react";
import CardInfo from "../../components/CardInfo";
import boy from "./boy.png";
import girl from "./girl.png";
import organization from "./organization.png";
import sportteam from "./sport-team.png";
import { useSelector } from "react-redux";


const CardsInfoEmp = () => {

  const { emps } = useSelector(state=>state.employee)
  let total = 0,b = 0,g = 0 ;
  if(emps)
  { 
    total = emps.length;
    b = (emps.filter(x=>x.gioiTinh === true)).length;
    g = total - b;
  }

  return (
    <div>
      <CardInfo
        icon={organization}
        sum={total}
        mess="Tổng Số Nhân Viên"
        color="linear-gradient(120deg, #f6d365 0%, #fda085 100%)"
      />
      <CardInfo
        icon={boy}
        sum={b}
        mess="Nhân Viên Nam"
        color="linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)"
      />
      <CardInfo
        icon={girl}
        sum={g}
        mess="Nhân Viên Nữ"
        color="linear-gradient(-225deg, #D4FFEC 0%, #57F2CC 48%, #4596FB 100%)"
      />
      <CardInfo
        icon={sportteam}
        sum={0}
        mess="Nhân Viên Chưa Xét Duyệt"
        color="linear-gradient(-45deg, #FFC796 0%, #FF6B95 100%)"
      />
    </div>
  );
};

export default CardsInfoEmp;

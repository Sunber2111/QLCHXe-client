import React from "react";
import {  Card, Image } from "semantic-ui-react";
import "./od.scss";
import { useSelector } from "react-redux";

const PurDetailBody = () => {
  const { isSelect } = useSelector((state) => state.order);

  return (
    <Card.Group style={{ marginTop: "20px" }}>
      {isSelect.ctHdx.map((ct) => (
        <Card className="card-od">
          <Card.Content>
            <Image floated="right" src={ct.hinh} />
            <Card.Header>Tên Xe : {ct.tenXe}</Card.Header>
            <Card.Meta>Kho : {ct.tenKho}</Card.Meta>
            <Card.Description>
              Số Lượng: <strong>{ct.soLuong}</strong>
            </Card.Description>
            <Card.Description>
              Vat: <strong>{ct.thueVat}</strong>
            </Card.Description>
            <Card.Description>
              Số Khung: <div className="od-sk">{ct.soKhung}</div>
            </Card.Description>
            <Card.Description>
              Số Máy: <div className="od-sm">{ct.soMay}</div>
            </Card.Description>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  );
};

export default PurDetailBody;

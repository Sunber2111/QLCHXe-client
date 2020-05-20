import React from "react";
import readXlsxFile from "read-excel-file";
import { HdnSchema } from "../../app/models/hdn";

const PurchasingPage = () => {
  const fileSelectedhandler = (e) => {
    const schema = { ...HdnSchema };

    readXlsxFile(e.target.files[0], { schema }).then(({ rows, errors }) => {
      console.log(rows);

      console.log(errors);

      let arrErrors = [];

      errors.forEach((err) => {
        if (err.error === "invalid")
          arrErrors.push(
            `Sai kiểu dữ liệu tại: Dòng ${err.row}, Cột ${err.column}`
          );
        else if (err.error === "required")
          arrErrors.push(
            `Dữ liệu bắt buộc phải có tại: Dòng ${err.row}, Cột ${err.column}`
          );
        else
          arrErrors.push(`Dữ liệu sai tại: Dòng ${err.row}, Cột ${err.column}`);
      });
    });
  };

  return (
    <div>
      <label className="custom-file-upload-car" style={{ background: "white" }}>
        <input type="file" onChange={fileSelectedhandler} />
        Chọn File Excel Thêm Xe
      </label>
    </div>
  );
};

export default PurchasingPage;

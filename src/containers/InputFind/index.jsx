import React from "react";
import { Icon, Input } from "semantic-ui-react";
const InputFind = ({ classes }) => {
  return (
    <Input
      className={classes ? classes : ""}
      icon={<Icon name="search" inverted circular link />}
      placeholder="Tìm Kiếm..."
    />
  );
};

export default InputFind;

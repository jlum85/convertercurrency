import React from "react";

import DeviseSelect from "./DeviseSelect";

const DeviseBar = props => {
  return (
    <div className="deviseBar">
      <input
        placeholder=""
        type="number"
        name="currency"
        value={props.value}
        onChange={props.valueChange}
      />
      <DeviseSelect
        devise={props.devise}
        tabCurrency={props.tabCurrency}
        deviseChange={props.deviseChange}
      ></DeviseSelect>
    </div>
  );
};

export default DeviseBar;

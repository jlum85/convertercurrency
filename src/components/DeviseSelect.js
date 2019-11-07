import React from "react";

const DeviseSelect = props => {
  const element = props.tabCurrency.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  return (
    <select value={props.devise} onChange={props.deviseChange}>
      {element}
    </select>
  );
};

export default DeviseSelect;

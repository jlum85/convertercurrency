import React from "react";

const DeviseSelect = props => {
  const element = props.tabCurrency.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });
  //   console.log(element);

  return (
    <select value={props.devise} onChange={props.deviseChange}>
      {/* <select value={props.value} onChange={props.handleChange}> */}
      {element}
    </select>
  );
};

export default DeviseSelect;

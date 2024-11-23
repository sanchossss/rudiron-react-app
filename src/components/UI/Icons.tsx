import React from "react";

const Icons = ({ name = '', size = 24, color = "currentColor" }) => {
  return (
    <img
      src={`../../assets/icons/${name}.svg`}
      alt={name}
      width={size}
      height={size}
      style={{ fill: color }} // Для применения цвета, если это нужно
    />
  );
};

export default Icons;

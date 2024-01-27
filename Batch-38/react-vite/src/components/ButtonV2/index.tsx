import React from "react";
import "./ButtonV2.css";

type TButton = {
  lable: string;
  type?: string;
  icon : React.ReactNode;
};

const ButtonV2 = ({ lable, type = "",icon }: TButton) => {
  return <button className={`button ${type}`}>{icon} {lable}</button>;
};

export default ButtonV2;

import * as Icons from "react-icons/bs";

export const CustomIcon = ({ name }) => {
  let Icon = Icons[name];
  if (!Icon || name === undefined) {
    Icon = Icons["BsQuestionCircle"];
  }
  return <Icon />;
};
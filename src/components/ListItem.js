import "../styles/listitem.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolder,
  faFolderOpen,
  faAngleRight,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

const ListItem = props => {
  const { data } = props;
  const [open, changeOpen] = useState(false);
  console.log(data);
  const handleClick = () => {
    changeOpen(!open);
  };
  return (
    <div onClick={handleClick} className="list-item-container">
      <span className="list-item-icon-container">
        <FontAwesomeIcon
          icon={open ? faAngleDown : faAngleRight}
          className="list-item-arrow"
        />

        <FontAwesomeIcon
          icon={open ? faFolderOpen : faFolder}
          className="list-item-folder"
        />
      </span>
      <span className="list-item-title">{data.name}</span>
    </div>
  );
};

export default ListItem;

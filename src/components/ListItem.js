import "../styles/listitem.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolder,
  faFolderOpen,
  faAngleRight,
  faAngleDown,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { styleFileSize } from "../utils";

const ListItem = props => {
  const { data } = props;
  const [open, changeOpen] = useState(false);
  const handleClick = () => {
    changeOpen(!open);
  };

  const children = data.children ? (
    data.children.map((c, i) => <ListItem key={i} data={c} />)
  ) : (
    <></>
  );
  if (data.type === "folder") {
    return (
      <div>
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
        <div className="list-children">{open ? children : <></>}</div>
      </div>
    );
  } else {
    return (
      <div>
        <div onClick={handleClick} className="list-item-container">
          <span className="list-item-icon-container">
            <FontAwesomeIcon
              icon={faFileAlt}
              className="list-item-folder"
              style={{ marginLeft: 21 }}
            />
          </span>
          <span className="list-item-title">{data.name}</span>
          <span className="list-item-size">{styleFileSize(data.size)}</span>
        </div>
        <div className="list-children">{open ? children : <></>}</div>
      </div>
    );
  }
};

export default ListItem;

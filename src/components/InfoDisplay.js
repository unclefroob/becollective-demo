import "../styles/infodisplay.css";
import { styleFileSize } from "../utils";

const InfoDisplay = props => {
  const { fileAmount, fileSize } = props;

  return (
    <div className="info-display-container">
      <div className="info-item">Total Files: {fileAmount}</div>
      <div className="info-item">Total Filesize: {styleFileSize(fileSize)}</div>
    </div>
  );
};

export default InfoDisplay;

import "../styles/infodisplay.css";

const InfoDisplay = props => {
  const { fileAmount, fileSize } = props;

  return (
    <div className="info-display-container">
      <div className="info-item">Total Files: {fileAmount}</div>
      <div className="info-item">Total Filesize: {fileSize}</div>
    </div>
  );
};

export default InfoDisplay;

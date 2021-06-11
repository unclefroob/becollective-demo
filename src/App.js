import { useEffect, useState } from "react";
import ListItem from "./components/ListItem";
import InfoDisplay from "./components/InfoDisplay";
import { fetchData, findFiles } from "./utils";

const App = () => {
  const [myData, changeData] = useState([]);
  const [fileAmount, changeFileAmount] = useState(0);
  const [fileSize, changeFileSize] = useState(0);
  useEffect(() => {
    fetchData().then(res => {
      changeData(res);
      const parsedFiles = findFiles(res);
      changeFileAmount(parsedFiles.files);
      changeFileSize(parsedFiles.fileSize);
    });
  }, []);
  return (
    <div>
      {myData.map((item, i) => (
        <ListItem
          key={i}
          data={item}
          changeFileAmount={changeFileAmount}
          changeFileSize={changeFileSize}
        />
      ))}
      <InfoDisplay fileAmount={fileAmount} fileSize={fileSize} />
    </div>
  );
};

export default App;

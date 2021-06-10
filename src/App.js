import { useEffect, useState } from "react";
import ListItem from "./components/ListItem";
import { fetchData } from "./utils";

const App = () => {
  const [myData, changeData] = useState([]);
  useEffect(() => {
    fetchData().then(res => {
      changeData(res);
    });
  }, []);
  return (
    <div>
      {myData.map((item, i) => (
        <ListItem key={i} data={item} />
      ))}
    </div>
  );
};

export default App;

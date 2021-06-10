import { useEffect, useState } from "react";
import { fetchData } from "./utils";

const App = () => {
  const [myData, changeData] = useState([]);
  useEffect(() => {
    fetchData().then(res => {
      changeData(res);
    });
  }, []);
  return <div></div>;
};

export default App;

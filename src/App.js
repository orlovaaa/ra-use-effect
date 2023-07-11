import "./css/main.css";
import { useEffect, useState } from "react";
import List from "./components/List";
import Details from "./components/Details";

function App() {
  const [users, setUsers] = useState([]);
  const [info, setInfo] = useState({});

  useEffect(() => {
    firstLoad();
  }, []);

  const firstLoad = () => {
    fetch(
      "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json"
    )
    .then((resp) => resp.json())
    .then(function (data) {
      setUsers(data);
    });
  };

  const onHandleClick = (id, name) => {
    setInfo({ id: id, name: name });
  };

  return (
    <>
    <div className="main">
      <List onHandleClick={onHandleClick} users={users} />
      <Details info={info} />
    </div>
    </>
  );
}

export default App;
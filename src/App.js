import "./App.css";
import Header from "./Components/Header";
import IslandForm from "./Components/IslandForm";
import IslandList from "./Components/IslandList";
import { useState } from "react";
// import islands from "C:/Users/HP/Development/TASK-React-State-KuwaitIslands-Details/src/data/islands.js";

function App() {
  let islandBoubyan = {
    name: "Boubyan",
    img: "http://photos.wikimapia.org/p/00/02/20/48/92_big.jpg",
  };

  const [island, setIsland] = useState(islandBoubyan);
  // islands.forEach((islandd) => {
  //   const [visitors, setVisitors] = useState(islandd.visitors);
  // });

  return (
    <div>
      <Header />

      <div className="homePage">
        <IslandList
          setIsland={setIsland}
          // visitors={visitors}
          // setVisitors={setVisitors}
        />
        <IslandForm
          island={island}
          // visitors={visitors}
          // setVisitors={setVisitors}
        />
      </div>
    </div>
  );
}

export default App;

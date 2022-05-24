import "./App.css";
import Header from "./Components/Header";
import IslandForm from "./Components/IslandForm";
import IslandList from "./Components/IslandList";
import { useState } from "react";
import islands from "C:/Users/HP/Development/TASK-React-State-KuwaitIslands-Details/src/data/islands.js";

function App() {
  let islandBoubyan = islands[1];

  const [island, setIsland] = useState(islandBoubyan);
  const [islandsState, setislandsState] = useState(islands);

  const incVisitors = (id) => {
    let newislands = islandsState;
    let newisland = newislands.find((island) => {
      return island.id === id;
    });
    newisland.visitors++;
    setislandsState([...newislands]);
    // setislandsState(newislands);
  };
  return (
    <div>
      <Header />

      <div className="homePage">
        <IslandList setIsland={setIsland} islands={islandsState} />
        <IslandForm island={island} incVisitors={incVisitors} />
      </div>
    </div>
  );
}

export default App;

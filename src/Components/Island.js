import React from "react";
import { useState } from "react";

export default function Island({ island, setIsland }) {
  const [visitors, setVisitors] = useState(island.visitors);
  // const handlevisitor = () => setVisitors(visitors + 1);
  return (
    <div onClick={() => setIsland(island)} className="Island">
      <h3>{island.name}</h3>
      {/* YOU HAVE TO CHANGE THE VISITORS COUNT */}
      <p>Visitors {visitors}</p>
      <img src={island.img} alt={island.name} />
    </div>
  );
}
// export { Island, handlevisitor };

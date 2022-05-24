import { useState } from "react";
import islands from "../data/islands";
// import Island from "./Island.js";
export default function IslandForm({ island, incVisitors }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const confirmbooking = () => {
    if (
      window.confirm(
        `Are you sure you want to book to ${island.name} with the Name: ${name}, phone: ${phone}`
      )
    ) {
      incVisitors(island.id);
      alert("increment visitors");
    }
  };
  return (
    <div className="form">
      <h2>{island.name}</h2>
      <img src={island.img} alt={island.name} />
      <h3>Book a trip to {island.name} island</h3>
      <input
        onChange={(e) => setName(e.target.value)}
        placeholder="Type Full Name"
      />
      <input
        type={"tel"}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Type Phone Number"
      />
      <button className="book" onClick={confirmbooking}>
        Book for today!
      </button>
    </div>
  );
}

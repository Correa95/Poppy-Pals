import { useState } from "react";
import "./App.css";
import { puppyList } from "./data";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  return (
    <div className="container">
      {puppies.map((puppy) => (
        <Puppy
          key={puppy.id}
          name={puppy.name}
          email={puppy.email}
          age={puppy.age}
          ownerId={puppy.ownerId}
        />
      ))}
    </div>
  );
}

function Puppy({ name, email, age, ownerId }) {
  return (
    <div className="card">
      <h1>Pop name is,{name}</h1>
      <h2>Pop email is, {email}</h2>
      <h4>
        {name},is {age} years old{" "}
      </h4>
      <p>Owner ID is, {ownerId} </p>
    </div>
  );
}

export default App;

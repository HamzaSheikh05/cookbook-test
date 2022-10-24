import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MasterDetails from "./components/MasterDetail";
import RecipeList from "./components/RecipeList";
import { useState } from "react";
import { Button } from "react-bootstrap";
function App() {
  const [toggle, setState] = useState(true);

  return (
    <div className="App d-grid gap-3">
      <Button onClick={() => setState(!toggle)}>Switch Between UI Types</Button>
      {toggle ? <RecipeList /> : <MasterDetails />}
    </div>
  );
}

export default App;

import React, { useEffect } from "react";
import Nav from "./components/Nav.js";
import Dashboard from "./components/Dashboard.js";
import Login from "./components/Login.js";

function App() {
  const code = new URLSearchParams(window.location.search).get("code");
  return (
    <div className="App bg-slate-800 min-h-screen">
      {code ? <Dashboard code={code} /> : <Login />}
    </div>
  );
}

export default App;

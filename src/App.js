import React, { useEffect } from "react";
import Nav from "./components/Nav.js";
import Dashboard from "./components/dashboard/Dashboard.js";
import Login from "./components/Login.js";

function App() {
  const code = new URLSearchParams(window.location.search).get("code");
  return (
    <div className="App bg-gray-900 min-h-screen">
      {code ? <Dashboard code={code} /> : <Login />}
    </div>
  );
}

export default App;

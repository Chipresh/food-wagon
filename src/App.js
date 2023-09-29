import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>

    </div>
  );
}

export default App;

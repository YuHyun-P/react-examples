import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Context from "./Context";
import LifeCycle from "./LifeCycle";

function App() {
  return (
    <>
      <header style={{ borderBottom: "1px solid #fff" }}>
        <nav style={{ display: "flex", gap: "10px" }}>
          <Link to="/">Home</Link>
          <Link to="/context">Context</Link>
          <Link to="/lifecycle">LifeCycle</Link>
        </nav>
      </header>

      <Routes>
        <Route index element={<Home />} />
        <Route path="/context" element={<Context />} />
        <Route path="/lifecycle" element={<LifeCycle />} />
      </Routes>
    </>
  );
}

export default App;

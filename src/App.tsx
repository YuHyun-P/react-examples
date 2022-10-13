import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Context from "./Context";

function App() {
  return (
    <>
      <header style={{ borderBottom: "1px solid #fff" }}>
        <nav style={{ display: "flex", gap: "10px" }}>
          <Link to="/">Home</Link>
          <Link to="/context">Context</Link>
        </nav>
      </header>

      <Routes>
        <Route index element={<Home />} />
        <Route path="/context" element={<Context />} />
      </Routes>
    </>
  );
}

export default App;

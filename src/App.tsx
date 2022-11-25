import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Context from "./Context";
import LifeCycle from "./LifeCycle";
import ErrorBoundaries from "./ErrorBoundaries";
import Ref from "./Ref";
import HOC from "./HOC";

function App() {
  return (
    <>
      <header className="p-1  border-solid border-b-white border-b">
        <nav className="flex gap-3">
          <Link to="/">Home</Link>
          <Link to="/context">Context</Link>
          <Link to="/lifecycle">LifeCycle</Link>
          <Link to="/errorboundary">ErrorBoundaries</Link>
          <Link to="/ref">Ref</Link>
          <Link to="/hoc">HOC</Link>
        </nav>
      </header>

      <main className="mt-4">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/context" element={<Context />} />
          <Route path="/lifecycle" element={<LifeCycle />} />
          <Route path="/errorboundary" element={<ErrorBoundaries />} />
          <Route path="/ref" element={<Ref />} />
          <Route path="/hoc" element={<HOC />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

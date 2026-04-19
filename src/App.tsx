import { Routes, Route } from "react-router";
import "./styles.css";
import Landing from "./pages/Landing";
import Loading from "./pages/Loading";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/loading" element={<Loading />} />
    </Routes>
  );
}

export default App;

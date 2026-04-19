import { Routes, Route } from "react-router";
import "./styles.css";
import Landing from "./pages/Landing";
import Loading from "./pages/Loading";
import AgeVerification from "./pages/AgeVerification";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/loading" element={<Loading />} />
      <Route path="/age-verification" element={<AgeVerification />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;

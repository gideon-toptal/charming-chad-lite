import { Routes, Route } from "react-router";
import "./styles.css";
import Landing from "./pages/Landing";
import Loading from "./pages/Loading";
import AgeVerification from "./pages/AgeVerification";
import Login from "./pages/Login";
import SignUp from "./pages/sign-up";
import Vixen from "./pages/vixen";
import RatePickupLines from "./pages/rating";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/loading" element={<Loading />} />
      <Route path="/age-verification" element={<AgeVerification />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/vixen" element={<Vixen />} />
      <Route path="/rating" element={<RatePickupLines />} />
    </Routes>
  );
}

export default App;

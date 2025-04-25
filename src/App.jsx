import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Explore from "./pages/explore";
import Offers from "./pages/offers";
import Profile from "./pages/Profile";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import NavBar from "./components/navbar";
function App() {

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

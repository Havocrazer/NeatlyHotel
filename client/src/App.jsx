import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLoginPage from "./pages/UserLoginPage";
import RegisterPage from "./pages/RegisterPage";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/hotel/user-login" element={<UserLoginPage />} />
          <Route path="/hotel/user-register" element={<RegisterPage />} />
          <Route path="/hotel" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import { BrowserRouter,Routes, Route } from "react-router-dom";
import SignupPage from "./pages/Signup";
import SigninPage from "./pages/Signin";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
   <Routes>
        <Route path="/" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

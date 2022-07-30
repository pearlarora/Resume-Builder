import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomeScreen from "./components/home/HomeScreen";
import LoginPage from "./components/login/LoginPage";
import SignupPage from "./components/register/SignupPage";
import Footer from "./layout/footer/Footer";
import Header from "./layout/header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

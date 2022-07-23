import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomeScreen from "./components/home/HomeScreen";
import Header from "./layout/header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

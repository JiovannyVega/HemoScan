import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import About from "./pages/About";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <div className="h-screen ">
        <Router basename="/HemoScan">
          <Header />
          <Routes className="">
            <Route path="/" element={<HomePage />} />
            <Route path="/Login/" element={<LoginPage />} />
            <Route path="/about/" element={<About />} />
          </Routes>
        </Router>
      </div>

    </>
  );
}

export default App;

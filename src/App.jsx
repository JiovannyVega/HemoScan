import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="h-screen ">
        <Router basename="/HemoScan">
          <Header />
          <Routes className="">
            <Route path="/" element={<LoginPage />} />
            <Route path="/about/" element={<About />} />
          </Routes>
          <Footer />
        </Router>
      </div>

    </>
  );
}

export default App;

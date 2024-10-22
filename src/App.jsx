import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import About from "./pages/About";
import Footer from "./components/Footer";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

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
            <Route path="/*" element={<ErrorPage />} />
            <Route path="/profile/" element={<ProfilePage />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;

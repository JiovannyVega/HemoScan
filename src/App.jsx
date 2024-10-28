import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import Footer from "./components/Footer";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import HFAQPage from "./pages/HFAQPage";
import AboutPage from "./pages/AboutPage";
import Dashboard from "./pages/Dashboard";
import SignupPage from "./pages/RegisterPage";


function App() {
  return (
    <>
      <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
        <Router basename="/HemoScan">
          <Header />
          <Routes className="">
            <Route path="/" element={<HomePage />} />
            <Route path="/Login/" element={<LoginPage />} />
            <Route path="/about/" element={<AboutPage />} />
            <Route path="/*" element={<ErrorPage />} />
            <Route path="/profile/" element={<ProfilePage />} />
            <Route path="/hfaq/" element={<HFAQPage />} />
            <Route path="/dashboard/" element={<Dashboard />} />
            <Route path="/signup/" element={<SignupPage />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
// import ContactPage from './pages/ContactPage';
import HomePage from "./pages/HomePage";
import "./App.css";
import CarsDirectoryPage from "./pages/CarsDirectoryPage";
import Header from "./components/Header";
// import Footer from './components/Footer';
import CarDetailPage from './pages/CarDetailPage';
import AboutPage from "./pages/AboutPage";
import ContactPage from "./components/ContactDescription";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="directory" element={<CarsDirectoryPage />} />
        <Route path="directory/carId" element={<CarDetailPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;

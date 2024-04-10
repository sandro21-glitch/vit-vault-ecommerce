import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./ui/Header";
import MainPage from "./pages/MainPage";
import Footer from "./pages/Footer";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

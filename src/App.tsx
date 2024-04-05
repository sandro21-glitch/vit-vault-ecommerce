import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./ui/Header";
import MainPage from "./pages/MainPage";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

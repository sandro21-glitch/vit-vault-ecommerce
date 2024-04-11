import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./ui/Header";
import MainPage from "./pages/MainPage";
import Footer from "./pages/Footer";
import { useEffect } from "react";
import { useAppDispatch } from "./hooks/hooks";
import { fetchDataFromFirebase } from "./features/slices/productsSlice";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchDataFromFirebase());
  }, [dispatch]);

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

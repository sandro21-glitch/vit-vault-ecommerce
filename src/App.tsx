import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./ui/Header";
import MainPage from "./pages/MainPage";
import Footer from "./pages/Footer";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { fetchDataFromFirebase } from "./features/slices/productsSlice";
import Spinner from "./ui/Spinner";

const App = () => {
  const dispatch = useAppDispatch();
  const { status, error } = useAppSelector((store) => store.product);
  useEffect(() => {
    dispatch(fetchDataFromFirebase());
  }, [dispatch]);

  if (error) return <p>Error</p>;
  if (status === "loading") return <Spinner />;

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

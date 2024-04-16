import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./ui/Header";
import MainPage from "./pages/MainPage";
import Footer from "./pages/Footer";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { fetchDataFromFirebase } from "./features/slices/productsSlice";
import Spinner from "./ui/Spinner";
import ProductByCategory from "./pages/ProductByCategory";
import PathChangeListener from "./utils/PathChangeListener";
import SingleProduct from "./features/productPages/singleProduct/SingleProduct";

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
        <Route
          path="/product-category/:category"
          element={<ProductByCategory />}
        />
        <Route path="/product/:product" element={<SingleProduct />} />
      </Routes>
      <Footer />
      <PathChangeListener />
    </BrowserRouter>
  );
};

export default App;

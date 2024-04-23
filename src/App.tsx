import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./ui/Header";
import MainPage from "./pages/MainPage";
import Footer from "./features/mainPage/Footer";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import {
  fetchDataFromFirebase,
  setFilteredProducts,
  setSearchTerm,
} from "./features/slices/productsSlice";
import Spinner from "./ui/Spinner";
import ProductByCategory from "./pages/ProductByCategory";
import PathChangeListener from "./utils/PathChangeListener";
import SingleProduct from "./pages/SingleProduct";
import ProductByInput from "./pages/ProductByInput";

const App = () => {
  const dispatch = useAppDispatch();
  const { status, error, productData } = useAppSelector(
    (store) => store.product
  );

  const queryString = window.location.search;
  const searchParams = new URLSearchParams(queryString);
  const searchQuery = searchParams.get("search");
  useEffect(() => {
    dispatch(fetchDataFromFirebase());
  }, [dispatch]);

  useEffect(() => {
    if (searchQuery && productData) {
      dispatch(setSearchTerm(searchQuery));
      dispatch(setFilteredProducts());
    }
  }, [searchQuery, productData, dispatch]);

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
        <Route path="/shop" element={<ProductByInput />} />
      </Routes>
      <Footer />
      <PathChangeListener />
    </BrowserRouter>
  );
};

export default App;

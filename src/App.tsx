import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import {
  fetchDataFromFirebase,
  setFilteredProducts,
  setSearchTerm,
} from "./features/slices/productsSlice";
import { fetchArticlesData } from "./features/slices/articlesSlice";
import PathChangeListener from "./utils/PathChangeListener";
import Header from "./ui/Header";
import Footer from "./features/mainPage/Footer";
import Spinner from "./ui/Spinner";
import {
  Articles,
  Cart,
  Discounted,
  MainPage,
  ProductByCategory,
  ProductByInput,
  SingleArticle,
  SingleProduct,
} from "./pages";
import Sidebars from "./pages/Sidebars";

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
    dispatch(fetchArticlesData());
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
        <Route path="/cart" element={<Cart />} />
        <Route path="/blog" element={<Articles />} />
        <Route path="/:article" element={<SingleArticle />} />
        <Route path="/discount" element={<Discounted />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Sidebars />
      <Footer />
      <PathChangeListener />
    </BrowserRouter>
  );
};

export default App;

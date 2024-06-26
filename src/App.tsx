import {
  HashRouter as BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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
  Profile,
  Sidebars,
  Register,
  ResetPassword,
  OrderDetails,
} from "./pages";
import { Toaster } from "react-hot-toast";

const App = () => {
  const dispatch = useAppDispatch();
  const { status, error, productData } = useAppSelector(
    (store) => store.product
  );

  // Get the "search" parameter from the URL query string
  const queryString = window.location.search;
  const searchParams = new URLSearchParams(queryString);
  const searchQuery = searchParams.get("search");

  //fetch data
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

  if (error || status === "failed")
    return <p className="text-center min-h-full">Something went wrong...</p>;
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
        <Route path="/register" element={<Register />} />
        <Route path="/password-recovery" element={<ResetPassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/order/:orderId" element={<OrderDetails />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Sidebars />
      <Footer />
      <PathChangeListener />
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px", zIndex: "9999999" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "white",
            color: "black",
          },
        }}
      />
    </BrowserRouter>
  );
};

export default App;

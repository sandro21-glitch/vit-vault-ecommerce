import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  setPriceSort,
  setProductPerPage,
} from "../features/slices/filtersSlice";

const PathChangeListener = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(setProductPerPage(24));
    dispatch(setPriceSort("normal"));
  }, [dispatch, location.pathname]);

  return null;
};

export default PathChangeListener;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// component
import Navbar from "./components/Navbar";
import ShopProducts from "./components/ShopProducts";
import { updateData } from "./redux/features/shopSlice";

function App() {
  const data = useSelector((data) => data.shop);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateData());
  }, [data, dispatch]);

  return (
    <>
      <Navbar />
      <ShopProducts />
    </>
  );
}

export default App;

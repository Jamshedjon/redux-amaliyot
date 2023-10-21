import { useDispatch } from "react-redux";
import {
  incrementAmont,
  decrementAmont,
  removeItem,
} from "../redux/features/shopSlice";

function Product({ name, amount, image, price }) {
  const dispatch = useDispatch();
  return (
    <div className="max-w-3xl mx-auto py-5 px-3 flex justify-between items-center">
      <img src={image} alt={name + " glasses"} className="w-40" />
      <div className="w-1/2">
        <p className="font-medium text-lg">{name}</p>
        <p className="font-semibold">$ {price}</p>
        <button
          onClick={() => dispatch(removeItem(name))}
          className="btn btn-secondary btn-sm"
        >
          Remove
        </button>
      </div>
      <div className="flex flex-col items-center gap-1">
        <h3 className="font-medium">Amount</h3>
        <div className="flex justify-center gap-2 items-center">
          <button
            className="btn btn-sm"
            onClick={() => {
              if (amount === 1) {
                dispatch(removeItem(name));
              } else {
                dispatch(decrementAmont(name));
              }
            }}
          >
            -
          </button>
          <span className="font-medium text-lg">{amount}</span>
          <button
            onClick={() => dispatch(incrementAmont(name))}
            className="btn btn-sm"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;

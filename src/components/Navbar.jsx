import { useSelector } from "react-redux";

function Navbar() {
  const { products, amount, total } = useSelector((data) => data.shop);

  return (
    <>
      <div className="max-w-3xl mx-auto py-5 px-3  flex justify-between items-center">
        <h1 className=" text-3xl font-medium">Home</h1>
        <p>
          <span className="mr-1">Shop</span>
          <span className=" badge badge-secondary">{amount}</span>
        </p>
      </div>
      <h1 className="w-full text-center text-3xl">Redux Store</h1>
    </>
  );
}

export default Navbar;

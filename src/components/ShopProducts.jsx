import { useSelector } from "react-redux";
import Product from "./Product";

function ShopProducts() {
  const { products, total } = useSelector((data) => data.shop);
  return (
    <div>
      {products.length !== 0 ? (
        <>
          <div>
            {products.map((product) => {
              const { name, price, image, amount } = product;
              return (
                <Product
                  key={product.name}
                  name={name}
                  price={price}
                  image={image}
                  amount={amount}
                />
              );
            })}

            <div className="max-w-md flex justify-between mx-auto items-center mt-5">
              <h2 className="text-3xl">Total</h2>
              <h2 className="text-3xl">${total.toFixed(2)}</h2>
            </div>
          </div>
        </>
      ) : (
        <div>
          <h1 className="text-4xl mt-10 text-center ">
            You don't have any items !
          </h1>
        </div>
      )}
    </div>
  );
}

export default ShopProducts;

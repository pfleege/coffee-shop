import ApiConnection from "../modules/ApiConnection";
import { ShopInterface } from "../interfaces/ShopInterface";

const Shop: React.FC<ShopInterface> = ({
  numberOfCartItems,
  increment,
  decrement,
}) => {
  const apiEndpoint = "https://fake-coffee-api.vercel.app/api";

  return (
    <>
      <div className="mt-48 flex flex-col justify-center items-center">
        <div className="w-full h-80 bg-cover bg-right bg-no-repeat bg-CoffeeShop relative">
          <h2 className="font-charm text-white text-8xl italic absolute top-16 left-20">
            Coffee Shop
          </h2>
        </div>
        <div className="mt-32 flex flex-col gap-8 justify-center w-full">
          <ApiConnection
            apiEndpoint={apiEndpoint}
            numberOfItems={9999}
            numberOfCartItems={numberOfCartItems}
            increment={increment}
            decrement={decrement}
          />
        </div>
      </div>
    </>
  );
};

export default Shop;

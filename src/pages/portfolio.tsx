import React, { useState, ChangeEvent, FormEvent } from "react";
import Layout from "./components/Layout";

const PortfolioManagementPage: React.FC = () => {
  const [cryptoSymbol, setCryptoSymbol] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleCryptoSymbolChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCryptoSymbol(event.target.value);
  };

  const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuantity(event.target.value);
  };

  const handleBuySubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle buy form submission logic here
    console.log("Buy - Crypto Symbol:", cryptoSymbol);
    console.log("Buy - Quantity:", quantity);
    // Reset form fields
    setCryptoSymbol("");
    setQuantity("");
  };

  const handleSellSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle sell form submission logic here
    console.log("Sell - Crypto Symbol:", cryptoSymbol);
    console.log("Sell - Quantity:", quantity);
    // Reset form fields
    setCryptoSymbol("");
    setQuantity("");
  };

  return (
    <Layout>
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Portfolio Management</h2>
        <div className="flex space-x-4 mb-4">
          <form onSubmit={handleBuySubmit}>
            <h3 className="text-lg font-bold mb-2">Buy Cryptocurrency</h3>
            <div className="flex items-center mb-2">
              <label htmlFor="cryptoSymbol" className="mr-2">
                Crypto Symbol:
              </label>
              <input
                type="text"
                id="cryptoSymbol"
                value={cryptoSymbol}
                onChange={handleCryptoSymbolChange}
                required
                className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="flex items-center mb-2">
              <label htmlFor="quantity" className="mr-2">
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={handleQuantityChange}
                required
                className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300"
            >
              Buy
            </button>
          </form>
          <form onSubmit={handleSellSubmit}>
            <h3 className="text-lg font-bold mb-2">Sell Cryptocurrency</h3>
            <div className="flex items-center mb-2">
              <label htmlFor="cryptoSymbol" className="mr-2">
                Crypto Symbol:
              </label>
              <input
                type="text"
                id="cryptoSymbol"
                value={cryptoSymbol}
                onChange={handleCryptoSymbolChange}
                required
                className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="flex items-center mb-2">
              <label htmlFor="quantity" className="mr-2">
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={handleQuantityChange}
                required
                className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              />
            </div>
            <button
              type="submit"
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300"
            >
              Sell
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default PortfolioManagementPage;

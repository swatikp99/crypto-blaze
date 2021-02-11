import { useState, useEffect } from "react";
import Header from "./components/Header";
import axios from "axios";
import CoinsJar from "./components/CoinsJar";

function App() {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      //setIsLoading(true);
      const result = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=15&page=1&sparkline=false&price_change_percentage=24hr%2C7d`
      );

      console.log(result.data);

      setItems(result.data);
      setIsLoading(false);
    }
    fetchItems()
  },[]);

  return (
    <div className="container">
      <Header title="CryptoBlaze" description="Where investment gets interesting."/>
      <CoinsJar isLoading={isLoading} items={items} />
    </div>
  );
}


export default App;

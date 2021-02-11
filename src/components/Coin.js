import React from "react";

const Coin = ({ item }) => {
  const color = item.price_change_percentage_24h > 0 ? "#1ae000" : "#e70808";
  return (
    <div className="card">
      <span>
        <img
          src={item.image}
          alt={item.name + " image"}
          width="5%"
          className="floatL"
        ></img>
        <h3 className="floatL" style={{ padding: "1%" }}>
          {item.name} ({item.symbol})
        </h3>
        <p style={{ float: "right", color: color, padding: "1%" }}>
          ({item.price_change_percentage_24h.toFixed(2)}%)
        </p>
        <h4 style={{ float: "right", color: color, padding: "1%" }}>
          {item.current_price}
        </h4>
      </span>
    </div>
  );
};

export default Coin;

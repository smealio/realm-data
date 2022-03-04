import React from "react";

const CollectibleData = ({ collectibleData }) => {

return (
  <ul>
  {collectibleData.map((item) => (
    <li>{item.feature} - {item.total}</li>
  ))}
  </ul>

);
};
export default FeatureRarity;

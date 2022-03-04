import React from "react";

const FeatureRarity = ({ featureRarity }) => {

return (
  <ul>
  {featureRarity.map((item) => (
    <li>{item.feature} - {item.total}</li>
  ))}
  </ul>

);
};
export default FeatureRarity;

import React, { useMemo } from "react";

const Stars = () => {
  const numStars = 30;

  const getRandomPosition = () => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
  });

  const stars = useMemo(
    () =>
      Array.from({ length: numStars }, (_, index) => (
        <div
          key={index}
          className="shooting_star"
          style={getRandomPosition()}
        ></div>
      )),
    [numStars]
  );

  return (
    <div className="noche">
      <div className="night">{stars}</div>
    </div>
  );
};

export default Stars;

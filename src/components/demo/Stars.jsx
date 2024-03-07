import React from "react";

function Stars() {
  const numStars = 30; 

  const getRandomPosition = () => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
  });

  return (
    <div className="noche">
      <div className="night">
        {[...Array(numStars)].map((_, index) => (
          <div
            key={index}
            className="shooting_star"
            style={getRandomPosition()}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Stars;

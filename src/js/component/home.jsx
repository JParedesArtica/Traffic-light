import React, { useEffect, useState } from "react";

//include images into your bundle

//create your first component

const Home = () => {
  const [activeLight, setActiveLight] = useState("null");
  const [lightPurple, setLightPurple] = useState(false);
  const colors = ["red", "yellow", "green"];

  const colorIndex = colors.indexOf(activeLight);

  const toggleLight = (lightColor) => {
    setActiveLight((prevActiveLight) =>
      prevActiveLight === lightColor ? null : lightColor
    );
  };

  const changeColor = () => {
    const nextIndex = (colorIndex + 1) % colors.length;
    setActiveLight(colors[nextIndex]);
  };

  useEffect(() => {
    const intervalId = setInterval(changeColor, 2000);
    return () => clearInterval(intervalId);
  }, [colorIndex]);

  return (
    <div className="container">
      <div id="trafficTop"></div>
      <div id="semaforo">
        {colors.map((lightColor) => (
          <div
            key={lightColor}
            className={`light ${lightColor} ${
              activeLight === lightColor ? "selected" : ""
            }`}
            onClick={() => {
              toggleLight(lightColor);
            }}
          ></div>
        ))}
        {lightPurple && (
          <div
            className={`purple light ${
              activeLight === "purple" ? "selected" : ""
            } `}
            onClick={() => {
              toggleLight("purple");
            }}
          ></div>
        )}
      </div>
      <button
        className="mt-2 btn btn-success"
        onClick={() => setLightPurple(!lightPurple)}
      >
        {lightPurple ? "Remove purple light" : "Add purple light"}
      </button>
      <button className="mt-2 btn btn-primary" onClick={changeColor}>
        Change Color
      </button>
    </div>
  );
};

export default Home;

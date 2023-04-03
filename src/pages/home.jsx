import React, { useEffect, useState } from "react";
import InvertedLogo from "../assets/invertedLogo";
import OriginalLogo from "../assets/originalLogo";

import classes from "./home.module.scss";

const arrayOfImg = [<InvertedLogo />, <OriginalLogo />];

const Home = () => {
  const [imgCounter, setImgCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImgCounter((currentValue) => {
        if (currentValue + 1 === arrayOfImg.length) {
          return 0;
        }
        return currentValue + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.wrapper}>
      <div className={classes.description}>
        Bienvenido a muramasa bjj!!!
        <div className={classes.efecto}>Acá va el efecto loco....</div>
      </div>
      <div className={classes.logo}>{arrayOfImg[imgCounter]}</div>
    </div>
  );
};

export default Home;

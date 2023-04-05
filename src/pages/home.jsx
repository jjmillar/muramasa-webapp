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
        <div className={classes.text}>"LA VERDADERA A VICTORIA ES LA QUE LOGRAS SOBRE TI MISMO."</div>
        <div className={classes.efecto}>MURAMASA GRAPPLING ARTS</div>
        <div className={classes.infoWrapper}>
          <div className={classes.infoCel}>Horarios</div>
          <div className={classes.infoCel}>Costos</div>
          <div className={classes.infoCel}>Contacto</div>
        </div>
      </div>
      <div className={classes.logo}>{arrayOfImg[imgCounter]}</div>
    </div>
  );
};

export default Home;

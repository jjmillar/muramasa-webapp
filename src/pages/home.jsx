import React, { useEffect, useState } from "react";
import InvertedLogo from "../assets/invertedLogo";
import OriginalLogo from "../assets/originalLogo";
import Horarios from "../components/horarios";
import Costos from "../components/costos";
import Contacto from "../components/contacto";

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
        <div className={classes.text}>
          "El verdadero propósito de las artes marciales es la lucha contra uno
          mismo, no contra los demás."
        </div>
        <div className={classes.efecto}>MURAMASA GRAPPLING ARTS</div>

        <div className={classes.infoCelWrapper}>
          <div className={classes.infoCel}>
            Horarios
            <div className={classes.dropdownMenu}>
              <Horarios />
            </div>
          </div>
          <div className={classes.infoCel}>
            Costos
            <div className={classes.dropdownMenu}>
              <Costos />
            </div>
          </div>
          <div className={classes.infoCel}>
            Contacto
            <div className={classes.dropdownMenu}>
              <Contacto />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.logo}>{arrayOfImg[0]}</div>
    </div>
  );
};

export default Home;

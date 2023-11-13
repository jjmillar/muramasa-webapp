import React from "react";
import InvertedLogo from "../assets/invertedLogo";
import Horarios from "../components/horarios";
import Costos from "../components/costos";
import Contacto from "../components/contacto";
import Text from "../components/text";
import IG from "../components/ig";

import classes from "./home.module.scss";

const Home = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.description}>
        <div className={classes.text}>
          <Text />
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
      <div className={classes.logo}>
        <InvertedLogo />
      </div>
      {/*
      <div>
        <IG />
      </div>
      */}
    </div>
  );
};

export default Home;

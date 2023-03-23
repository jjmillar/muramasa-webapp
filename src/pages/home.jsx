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
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
        dolorum itaque, doloribus officiis quas ad! Obcaecati molestiae vero
        velit impedit, veritatis nobis repudiandae ducimus alias voluptatibus
        quia labore ad asperiores!
      </div>
      <div className={classes.logo}>{arrayOfImg[imgCounter]}</div>
    </div>
  );
};

export default Home;

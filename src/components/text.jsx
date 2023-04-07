import React from "react";
import Typewriter from "typewriter-effect";

const Text = () => {

  return (
    <div>
      <Typewriter
        options={{
          autoStart: true,
          loop: true,
          delay: 80,
          strings:["El verdadero propósito de las artes marciales es la lucha contra uno mismo, no contra los demás."],
          pauseFor: 5000,
        }}
      />
    </div>
  );
};

export default Text;

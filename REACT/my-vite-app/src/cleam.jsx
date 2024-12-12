/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */

import React, { useEffect } from "react";

const cleam = () => {
 
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("timer running");
    });

    return () => {
      clearInterval(interval);
    };
  }, []);



  return (
    <div>
        
    </div>
  )
};

export default cleam;

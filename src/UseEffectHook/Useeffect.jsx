import React, { useState, useEffect } from "react";

const Useeffect = () => {
  const [age, setage] = useState(18);

  useEffect(() => {
    
      console.log("Change Occured");
      document.title = "Updated Age " + { age };
     
    //  window.addEventListener("tick", tick);
    //  return () => {
    //    window.removeEventListener("tick", tick);
    // };
  }, [age]);

  return (
    <div>
      My age is {age}
      <button type="button" onClick={() => setage(age - 1)}>
        {" "}
        Last year{" "}
      </button>
      <button type="button" onClick={() => setage(age + 1)}>
        {" "}
        Next year{" "}
      </button>
    </div>
  );
};

export default Useeffect;

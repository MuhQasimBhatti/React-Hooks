import React, { useMemo, useState } from "react";

const Usememo = () => {
  const [add, setadd] = useState(0);
  const [minus, setminus] = useState(100);
  const multiply = useMemo(
    function multiplication() {
        console.log("Muliplied")
        return add * 10;
    },
    [add]
  )

  return (
    <>
      <br />
      {multiply}
      <br />
      {add}
      <button type="button" onClick={() => setadd(add + 1)}>
        Addition
      </button>
      <br />
      {minus}
      <button type="button" onClick={() => setminus(minus - 1)}>
        Subtraction
      </button>
    </>
  );
};

export default Usememo;

import React, { useState } from "react";

const UsestateArray = () => {
  const [item, setlist] = useState([]);

  const additems = () => {
    setlist([
      ...item,
      {
        id: item.length,
        value: "pen",
      },
    ]);
  };
  return (
    <div>
      <ol>
        {item.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))
        }
      </ol>
      <button type="button" onClick={additems} > Add Items</button>
    </div>
  );
};

export default UsestateArray;

import React, { useState } from "react";
import Draggable from "react-draggable";

const Text = () => {
  const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState("Dobble Click to Edit");

  return (
    <Draggable>
      <div>
        {editMode ? (
          <input
            onDoubleClick={(e) => setEditMode(false)}
            onChange={(e) => setValue(e.target.value)}
            type="text"
          />
        ) : (
          <h2 onDoubleClick={() => setEditMode(true)} >{value}</h2>
        )}
      </div>
    </Draggable>
  );
};

export default Text;

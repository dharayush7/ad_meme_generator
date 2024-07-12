import React, { useState, createRef } from "react";
import { useSearchParams } from "react-router-dom";
import { exportComponentAsJPEG } from "react-component-export-image";
import Button from "react-bootstrap/Button";

import Text from "../components/Text";
import "bootstrap/dist/css/bootstrap.min.css";

const EditPage = () => {
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);

  const memeRef = createRef();

  const addText = () => {
    setCount(count + 1);
  };

  return (
    <div>
        <h3>Edit Page</h3>
      <div ref={memeRef} className="meme">
        
        <img src={params.get("url")} alt="Meme_Image" width="350px" />
        {Array(count)
          .fill(0)
          .map((e) => (
            <Text />
          ))}
      </div>
      <div className="mb-3 mt-3">
        <Button variant="primary" onClick={addText}>
          Add Text
        </Button>{" "}
      </div>
      <div>
        <Button variant="success" onClick={() => exportComponentAsJPEG(memeRef)}>
          Save
        </Button>{" "}
      </div>
    </div>
  );
};

export default EditPage;

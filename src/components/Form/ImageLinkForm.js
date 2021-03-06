import React from "react";
import "./ImageLinkForm.css";

export default function ImageLinkForm({ onSubmitChange, onInputChange }) {
  return (
    <div>
      <p className="f3">
        {
          "This AI brain will detect faces in images. Post any image address from the internet for detection"
        }
      </p>
      <div className="center">
        <div className="form center pa4 b43 shadow-5">
          <input
            onChange={onInputChange}
            className="input-text f4 pa2 w-70 center"
            type="text"
          ></input>

          <button
            onClick={onSubmitChange}
            className="input-text w-30 grow f4 link ph3 pv2 dib white bg-moon-gray"
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./ImageLinkForm.css";

export default function ImageLinkForm({ onSubmitChange, onInputChange }) {
  return (
    <div>
      <p className="f3">
        {
          "This AI brain will detect faces in images. Give it an image to work from"
        }
      </p>
      <div className="center">
        <div className="form center pa4 b43 shadow-5">
          <input
            onChange={onInputChange}
            className="f4 pa2 w-70 center"
            type="text"
          ></input>

          <button
            onClick={onSubmitChange}
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
}

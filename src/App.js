import React from "react";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/Form/ImageLinkForm";
import FaceRecognition from "./components/Recognition/FaceRecognition";
import Navigation from "./components/Navigation/Navigation";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />

      <ImageLinkForm />
      <FaceRecognition />
    </div>
  );
}

export default App;

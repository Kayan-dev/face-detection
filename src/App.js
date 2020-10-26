import React, { useEffect } from "react";
import "./App.css";
import Particles from "react-particles-js";

import Loading from "./components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";

import detail from "./Pages/Detail/detail";
import profile from "./Pages/Profile/profile";
import about from "./Pages/About/About";
import { selectAppLoading } from "./store/appState/selectors";
import HomePage from "./Pages/Homepage/HomePage";
import Listing from "./Pages/Listing/Listing";
const ParticleOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
};

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    //dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Particles className="particles" params={ParticleOptions} />
      {isLoading ? <Loading /> : null}
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* <Route exact path="/users" component={Listing} />
        <Route path="/users/:id?" component={detail} />
        <Route path="/about" component={about} />
        <Route path="/profile" component={profile} /> */}
      </Switch>
    </div>
  );
}

export default App;

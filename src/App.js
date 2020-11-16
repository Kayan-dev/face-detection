import React, { useEffect } from "react";
import "./App.css";
import Particles from "react-particles-js";
import Loading from "./components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { selectAppLoading } from "./store/appState/selectors";
import HomePage from "./Pages/Homepage/HomePage";
import Listing from "./Pages/Listing/Listing";
import SignIn from "./Pages/SignIn/SignIn";
import LogIn from "./Pages/LogIn/LogIn";
import Navigation from "./components/Navigation";
import { ParticleOptions } from "./components/Particles/Particle";
import About from "./Pages/About/About";
// import { getUserWithStoredToken } from "./store/user/actions";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    // dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation></Navigation>

      <Particles className="particles" params={ParticleOptions} />
      {isLoading ? <Loading /> : null}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/list" component={Listing} />
        <Route path="/about" component={About} />
        <Route path="/signup" component={SignIn} />
        <Route path="/login" component={LogIn} />
      </Switch>
    </div>
  );
}

export default App;

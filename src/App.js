
import Home from "./pages/Home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Admin from "./pages/Admin";
import login from "./pages/Login";
import register from "./pages/Register";
import Profile from "./pages/Profile";

import MapScooterReload from "./pages/MapScooterReload";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

const App =  () => {
  return (
      <Router>
        <Header islogged={true}/>
        <Switch>
            <Route path="/admin" exact component={Admin} />
            <Route path="/login" exact component={login} />
            <Route path="/register" exact component={register} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/map" exact component={MapScooterReload} />
            <Route path="/" exact component={Home} />
        </Switch>
      </Router>
  );
}

export default App;

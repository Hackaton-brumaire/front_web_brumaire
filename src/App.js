
import Home from "./pages/Home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./layout/Header";
import Faq from "./pages/Faq";
import Admin from "./pages/Admin";
import login from "./pages/Login";
import Register from '../src/pages/Register'
import Profile from "./pages/Profile";
import MapScooterReload from "./pages/MapScooterReload";
import AgentFront from "./component/faq/AgentFront";
import AuthService from "./api/AuthService";


const App =  () => {
  return (
      <Router>
        <Header islogged={true}/>
        <Switch>
          <Route path="/faq" component={Faq} />
          <Route path="/agent" component={AgentFront} />
          <Route path="/admin" exact component={Admin} />
          <Route path="/login" exact component={login} />
          <Route path="/register" exact component={Register} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/map" exact component={MapScooterReload} />
          <Route path="/logout" exact component={AuthService.logout} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
  );
} 



export default App;


import Home from "./pages/Home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


const App =  () => {
  return (
      <Router>
        <Header islogged={true}/>
        <Switch>
          <Route path="/faq" component={Faq} />
          <Route path="/agent" component={Agent} />
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

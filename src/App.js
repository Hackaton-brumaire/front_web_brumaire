
import Home from "./pages/Home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Faq from "./pages/Faq";
import Agent from "./componentes/faq/Agent";

const App =  () => {
  return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/faq" component={Faq} />
          <Route path="/agent" component={Agent} />
        </Switch>
      </Router>

  );
} 



export default App;

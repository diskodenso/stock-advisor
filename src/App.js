import './App.css';
import Home from "./Components/Home.js";
import "./Components/Results.css";
import Detail from "./Components/Detail.js"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
     <Router>
      <div className="App">
               <Switch>
          <Route exact path="/">
            < Home />
            
          {/* </Route>
          {/* <Route path="/About">
            <About /> */}
          </Route>
          <Route exact path="/detail/:companyName" children={<Detail />}/>
        </Switch>
        </div>
</Router>
  );
}

export default App;

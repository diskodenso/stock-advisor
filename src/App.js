import './App.css';
import Home from "./Components/Home.js";
import "./Components/Results.css";
import Detail from "./Components/Detail.js";
import NavBar from "./Components/NavBar.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./Components/About.js";
import { CompaniesContextProvider } from "./Context/detailContext.js";
import Login from "./Views/Login.js";
import { AuthContextProvider } from "./Context/authContext.js";

function App() {
  return (
     <Router>
      <div className="App">
        <NavBar />
        <h1>STOCK ADVISOR</h1>
        <Switch>
                  <AuthContextProvider>

        <CompaniesContextProvider>
          <Route exact path="/">
            < Home />
          </Route>
          <Route exact path="/About">
            < About />
            </Route>
            <Route exact path="/Login">
              < Login />
              </Route>
            <Route exact path="/detail/:symbol" children={<Detail />} />
            </CompaniesContextProvider>
                    </AuthContextProvider>

        </Switch>
        </div>
      </Router>
  );
}

export default App;

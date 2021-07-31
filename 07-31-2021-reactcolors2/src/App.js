import logo from './logo.svg';
import './App.css';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import ColorsApp from './ColorsApp';
import CounterApp from './CounterApp';
const NoMatch = ({location}) => (
  <div>
    <h3>Page not found: {location.pathname}</h3>
  </div>
)


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/colors">Colors</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/"></Route>
          <Route path="/colors">
            <ColorsApp />
          </Route>
          <Route path="/counter">
            <CounterApp />
          </Route>
        <Route component={NoMatch}></Route>
        </Switch>

      </header>
    </div>
  );
}




export default App;

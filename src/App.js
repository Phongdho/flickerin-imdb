import { Route, Switch} from "react-router-dom"
import HomePage from "./Pages/HomePage/HomePage";
import NavBar from "./Components/NavBar/NavBar";
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;

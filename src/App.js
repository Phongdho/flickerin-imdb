import { Route, Switch} from "react-router-dom"
import HomePage from "./Pages/HomePage/HomePage";
import SearchPage from "./Pages/SearchPage/SearchPage";
import MoviePage from "./Pages/MoviePage/MoviePage";
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/search/:id" component={SearchPage} />
        <Route exact path="/movie/:id" component={MoviePage} />
      </Switch>
    </div>
  );
}

export default App;

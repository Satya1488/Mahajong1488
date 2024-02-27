import {BrowserRouter, Route,Switch} from "react-router-dom"
import HomePage from "./components/HomePage"
import TilesGame  from "./components/TilesGame";
import './App.css';
import ScoreBoard from "./components/ScoreBoard";

const App=()=>(
  <BrowserRouter>
  <Switch>
    <Route  exact path="/" component={HomePage}/>
    <Route  exact path="/TilesGame" component={TilesGame}/>
    <Route  exact path="/gameover" component={ScoreBoard}/>
  </Switch>
  </BrowserRouter>
  
)

export default App;
import './App.scss';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Watch from './pages/watch/Watch';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/watch" component={Watch}/>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login}/>
      </Switch>
    </Router>
  );
}

export default App;

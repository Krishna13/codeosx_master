import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Cheatsheets from './components/Cheatsheets';
import Html from './components/Html';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/cheatsheets">
            <Cheatsheets />
          </Route>
          <Route exact path="/cheatsheets/html">
            <Html />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;


import './App.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { CommitsProvider } from './context/CommitsContext'
import Home from './Home/Home'
import About from './About'
import Contact from './Contact'
import Commits from './Commits/Commits'

export default function App() {
  return (
    <CommitsProvider>
      <Router>             
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/commits">
            <Commits />
          </Route>
        </Switch>      
      </Router>
    </CommitsProvider>
  );
}

import { React, createContext, useContext, useReducer } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Controls from './pages/Controls';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import reducer from './reducers/countReducer';
import PropTypes from 'prop-types';

// Using Context + useReducer
const initialState = 0;

const CountContext = createContext(null);

export const useCount = () => {
  const value = useContext(CountContext);
  if (value === null) throw new Error('CountProvider missing');
  return value;
};

const CountProvider = ({ children }) => (
  <CountContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </CountContext.Provider>
);

CountProvider.propTypes = {
  children: PropTypes.string
};

function App() {

  return (
    <CountProvider>
      <Router>
        <div className="App">
          <header className="App-header">
            <Navigation />
            <Switch>
              <Route path="/controls">
                <Controls />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </header>
        </div>
      </Router>
    </CountProvider>
  );
}

// "Awesome! We have solved the problem of prop drilling. We get additional points for having made our code more declarative by creating a descriptive reducer."

// "We are happy with our implementation, and, for many use cases, it is really all we need. But wouldn’t it be great if we could persist the count so it does not get reset to 0 every time we refresh the page? And to have a log of the application state? What about crash reports?"

export default App;

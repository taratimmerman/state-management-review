import { React, useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Controls from './pages/Controls';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Component prop drilling in React

function App() {

  // Separating our app out into different components presents a new challnge. We need some way to communicate between them and this is where prop drilling comes into play.
  // Given that we are building a single page application, there is now a second piece of state we need to handle — the route we are on. Let’s do this with React Router.

  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navigation />
          <Switch>
            <Route path="/controls">
              <Controls
                increaseCount={increaseCount}
                decreaseCount={decreaseCount}
                count={count}
              />
            </Route>
            <Route path="/">
              <Home count={count} />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

// "Nice! We now have our separate routes and everything works as expected. However, you may notice a problem. We are keeping our count state in App and using props to pass it down the component tree. But it appears that we pass down the same prop over and over again until we reach the component that needs to use it. Of course, as our app grows, it will only get worse. This is known as prop drilling."

export default App;

import { React, useState } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';

// Local component state in React

function App() {

// "The simplest way to implement the counter is to use local component state with the useState Hook."

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
    <div className="App">
      <header className="App-header">
        <h1>{count}</h1>
        <div className="App-actions">
          <Button
          variant="contained"
          color="primary"
          onClick={decreaseCount}
          >
            -
          </Button>
          <Button
          variant="contained"
          color="primary"
          onClick={increaseCount}
          >
            +
          </Button>
        </div>
      </header>
    </div>
  );
}

// "If this was a real project, it is likely that in the future, we would need more buttons and headers elsewhere in our app. And it is a good idea to make sure they all look and behave consistently, which is why we should probably turn them into reusable React components."

export default App;

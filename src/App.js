import { React, useState } from 'react';
import './App.css';
import Action from './components/Action';
import Count from './components/Count';

// Component prop drilling in React

function App() {

// Separating our app out into different components presents a new challnge. We need some way to communicate between them and this is where prop drilling comes into play.

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
        <Count count={count}/>
        <div className="App-actions">
          <Action onClick={decreaseCount} label="-"/>
          <Action onClick={increaseCount} label="+"/>
        </div>
      </header>
    </div>
  );
}

// "This looks great! But imagine the following scenario: what if we need to only display the count on our home route and have a separate route /controls where we display both the count and the control buttons? How should we go about this?"

export default App;

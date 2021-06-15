import { React } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Controls from './pages/Controls';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

// Using Redux for state management

// Persisting count state
export const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : 0;

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: persistedState ? persistedState.counter.value : 0,
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      if (state.value > 0) {
        state.value -= 1;
      }
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer },
}, persistedState);

store.subscribe(()=>{
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

// eslint-disable-next-line no-unused-vars
const { increment, decrement } = counterSlice.actions;

function App() {

  return (
    <Provider store={store}>
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
    </Provider>
  );
}

// "This looks really neat! Our state is now stored in the global Redux store and managed with pure functions (Redux Toolkit uses Immer under the hood to guarantee immutability). We can already take advantage of the awesome Redux DevTools."

export default App;

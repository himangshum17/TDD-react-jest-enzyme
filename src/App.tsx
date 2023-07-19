import React from 'react';
import './App.css';
function App() {
  const [count, setCount] = React.useState(0);
  const handleCountChange = () => {
    setCount(prev => prev + 1);
  };
  return (
    <div className='App' data-test-id='component-app'>
      <h1 data-test-id='counter-display-element'>
        The counter is ::&nbsp;<span data-test-id='count'>{count}</span>
      </h1>
      <button data-test-id='button-element' onClick={handleCountChange}>
        increment button
      </button>
    </div>
  );
}

export default App;

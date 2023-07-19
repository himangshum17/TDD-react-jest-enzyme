import './App.css';

function App() {
  return (
    <div className='App' data-test-id='component-app'>
      <h1 data-test-id='counter-display-element'>0</h1>
      <button data-test-id='button-element'>increment button</button>
    </div>
  );
}

export default App;

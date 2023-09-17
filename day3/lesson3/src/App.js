import './App.css';
import Register from './components/Register';
import Shopapp from './components/shopapp';

function App() {
  return (
    <div className="app">
      <div className='main-left'><Shopapp></Shopapp></div>
      <div className='register'><Register></Register></div>
    </div>
  );
}

export default App;

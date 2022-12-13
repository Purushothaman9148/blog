import Navabar from './Navbar';
import Home from './Home';

function App() {
  return (
    <div>
      <div className='App'>
        <Navabar />
        <div className='content'>
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;

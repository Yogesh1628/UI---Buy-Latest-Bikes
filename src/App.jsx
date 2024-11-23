import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NewArrivals from './components/NewArrivals';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <NewArrivals />
    </div>
  );
}

export default App;

import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Products/> */}
      <Dashboard/>

    </div>
  );
}

export default App;

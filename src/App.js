import logo from './logo.svg';
import './App.css';
import { ConstructionNotice } from './components/ConstructionNotice/ConstructionNotice';
import { Navbar } from './components/common/navbar/Navbar';
//importing bootstrap 5 css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Home } from './components/home/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>    
      <Home/>
    </div>
  );
}

export default App;

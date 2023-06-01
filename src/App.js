import logo from './logo.svg';
import './App.css';
import { ConstructionNotice } from './components/ConstructionNotice/ConstructionNotice';
import { NewNavbar } from './components/common/navbar/Navbar';
//importing bootstrap 5 css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
    <div className="App">
      <NewNavbar></NewNavbar>    
    </div>
  );
}

export default App;

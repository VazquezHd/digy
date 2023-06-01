import logo from './logo.svg';
import './App.css';
import { ConstructionNotice } from './components/ConstructionNotice/ConstructionNotice';
import { NewNavbar } from './components/common/header/Header';
//importing bootstrap 5 css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


function App() {
  return (
    <div>
      <NewNavbar></NewNavbar>    
    </div>
  );
}

export default App;

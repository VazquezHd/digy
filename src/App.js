import logo from './logo.svg';
import './App.css';
//import { ConstructionNotice } from './components/ConstructionNotice/ConstructionNotice';
import { Navbar } from './components/common/navbar/Navbar';
//importing bootstrap 5 css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Home } from './components/home/Home';
import { Service } from './components/services/Services';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import data_services from './components/services/data.json'
import { Footer } from './components/common/footer/Footer';


function App() {

  return (
<BrowserRouter>
<Navbar/>  
<Routes>
  <Route exact path="/" element={<Home />}/>
  {data_services.map((data_service, index) => (
      <Route exact path={`/${data_service.id}`} element={<Service data={data_service}/>} key={index}/>
  ))}
</Routes>
<Footer/>
</BrowserRouter>

  );
}

export default App;

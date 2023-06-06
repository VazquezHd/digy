import logo from './logo.svg';
import './App.css';
import { ConstructionNotice } from './components/ConstructionNotice/ConstructionNotice';
import { Navbar } from './components/common/navbar/Navbar';
//importing bootstrap 5 css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Home } from './components/home/Home';
import { Service } from './components/services/Services';


let service_data = {
  id: "internet-empresarial",
  name: "Internet Dedicado Simétrico",
  description: "Ofrecemos enlaces dedicados, con el más alto SLA del mercado y la mejor experiencia de conectividad segura para las aplicaciones de misión crítica que requiere tu empresa.",
  title2: "¿Qué nos diferencia?",
  texto: "Es la tecnología de telecomunicaciones que se basa en la Voz sobre IP (Voice Over Internet Protocol o Voz sobre Protocolo de Internet). Es la telefonía basada en la red que permite hacer llamadas desde cualquier lugar y dispositivo."
}


function App() {

  return (
    <div className="App">
      <Navbar/>    
      <Home/>
      <Service data={service_data}/>
    </div>
  );
}

export default App;

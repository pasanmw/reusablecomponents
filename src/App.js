import logo from './logo.svg';
import './App.css';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import Home from './containers/home';
import About from './containers/about';
function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/about" element={<About/>} />
     </Routes>
   </BrowserRouter>
  );
}

export default App;

import About from "./About";
import { Route, Routes, Link } from 'react-router-dom';
import "./App.css";
import Contact from "./Contact";
import Home from "./Home";
import Age from "./Age";
import ProductApi from "./ProductApi";
import Background from "../amrito/Background";


function App() {
  return (
    <div className="App">
{/* <div className="h-24 p-8 bg-black sticky top-0 flex gap-10 font-bold text-white">
  <Link to={'/'}>
<p>Home</p></Link>
<Link to= {'/about'}>
<p>About</p></Link>
<Link to={'/contact'}>
<p>Contact</p></Link>
</div>

<Routes>
  <Route path='/' element={ <Home/>}/>
  <Route path='/about' element={ <About/>}/>
  <Route path='/contact' element={ <Contact/>}/>

</Routes> */}

<Background/>
   
    </div>
  );
}

export default App;

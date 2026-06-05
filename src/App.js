import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './components/About';
import Fifthcomponent from './components/fifthcopmponent';
import Firstcompoent from './components/Firstcomponent';
import Fouthcomponent from './components/Fouthcompont';
import Secondcomponent from './components/Secondcomponent';
import Seventhcomponent from './components/Taskcomponent1';
import TaskCoponent from './components/TaskCoponent';
import Thirdcomponent from './components/Thirdcoponent';
import Contact from './components/Contact';
import Notfound from './components/Notfound';


function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
      <h1>Welcome to learning ReactJs </h1>
      {/* Below are our link connecting to diffrent componenet */}
      <nav>
        <Link to ="/" className='links' >First</Link>
        <Link to="/second" className='links'>Second</Link>
        <Link to="/third" className='links'>Third</Link>
        <Link to="/fouth" className='links'>Fouth</Link>
        <Link to="/fifth" className='links'>Fifth</Link>
        <Link to="/task" className='links'>Task</Link>
        <Link to="/seventh" className='links'>Sevent</Link>
        <Link to="/about" className='links'>About</Link>
       
      </nav>
        
       {/* below we rander/show/display our components */}
       <Routes>
         <Route path='/' element={<Firstcompoent/>}/>
         <Route path='/second' element={<Secondcomponent/>}/>
         <Route path='/third' element={<Thirdcomponent/>}/>
         <Route path='/fouth' element={<Fouthcomponent/>}/>
         <Route path='/first' element={<Firstcompoent/>}/>
         <Route path='/task' element={<TaskCoponent/>}/>
        <Route path='/seventh' element={<Seventhcomponent/>}/>
        <Route path="/fifth" element={<Fifthcomponent/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<Notfound/>}/>
       </Routes>

      </header>
  
    </div>
    </Router>
  );
}

export default App;

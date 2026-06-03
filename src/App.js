import './App.css';
import About from './components/About';
import Firstcompoent from './components/Firstcomponent';
import Secondcomponent from './components/Secondcomponent';
import TaskCoponent from './components/TaskCoponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Welcome to learning ReactJs </h1>
        
       {/* below we rander/show/display our components */}
       <Firstcompoent/>
       <Secondcomponent/>
       <TaskCoponent/>
       <About/>
      </header>
    </div>
  );
}

export default App;

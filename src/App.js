import './App.css';
import About from './components/About';
import Fifthcomponent from './components/fifthcopmponent';
import Firstcompoent from './components/Firstcomponent';
import Fouthcomponent from './components/Fouthcompont';
import Secondcomponent from './components/Secondcomponent';
import TaskCoponent from './components/TaskCoponent';
import Thirdcomponent from './components/Thirdcoponent';

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
       <Thirdcomponent/>
       <Fouthcomponent/>
       <Fifthcomponent/>
      </header>
    </div>
  );
}

export default App;

import './App.css';
import Message from './component/StateUsingClassComponent';
import SetStateUse from './component/setStateUse';
import StateUsingFunctionalComponent from './component/stateUsingFunctionalComponent';

function App() {
  return (
    <div className="App">
     <Message />
     <SetStateUse />
     <StateUsingFunctionalComponent />
     
    </div>
  );
}

export default App;

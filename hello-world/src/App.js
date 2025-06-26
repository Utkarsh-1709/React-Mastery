import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet';
import Welcome from './component/Welcome';
import Hello from './component/Hello';

function App() {
  return (
    <div className="App">
        <p>
         <Greet name="Utkarsh" />
         <Greet name="Aadarsh" />
         <Greet name="Kunal" />
        </p>
        <p>
         <Welcome name="Utkarsh" />
         <Welcome name="Aadarsh" />
         <Welcome name="Kunal" />
        </p>
        <p><Hello /></p>
    </div>
  );
}

export default App;

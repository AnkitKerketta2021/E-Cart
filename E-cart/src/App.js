import logo from './logo.svg';
import './App.css';
import Body from './components/mainPage/body/Body';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/navbar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Body />
    </div>
  );
}

export default App;

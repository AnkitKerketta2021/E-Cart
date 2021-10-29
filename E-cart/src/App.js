import logo from './logo.svg';
import './App.css';
import Body from './components/mainPage/body/Body';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/navbar/NavBar';
import SecondNav from './components/mainPage/top/SecondNav';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SecondNav />
      <Body />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Unorder from './components/Unorder';
import Head from './components/Head';

let style1={
  marginLeft:"38%",
  width:"11%"
}


function App() {
  return (
    <div className="App">
      <Head head="Mobile Operating System"/>
      <ul style={style1} >
      <Unorder list="Andriod"/>
      <Unorder list="Blackberry"/>
      <Unorder list="Iphone"/>
      <Unorder list="Windows phone"/>
      </ul>

      <Head head="Mobile Manufactures"/>
      <ul style={style1}  >
      <Unorder list="Samsung"/>
      <Unorder list="Htc"/>
      <Unorder list="Micromax"/>
      <Unorder list="Apple"/>
      </ul>
    </div>
  );
}

export default App;

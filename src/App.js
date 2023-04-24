import logo from './logo.svg';
import './App.css';
import { component1 } from './components/component1';
import { useEffect } from 'react';

const api = {
  key:'2dc20d0f72e149de22898142fa078179',
  base: 'https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}'

}
function App() {
  const URL = 'api.openweathermap.org/data/3.0/onecall?lat=30.489772&lon=-99.771335&units=metric'
  const fetchApi = async () =>{
    const response = await fetch(URL)
    console.log(response.statusText )
  }
  useEffect(()=>{
    fetchApi()
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;

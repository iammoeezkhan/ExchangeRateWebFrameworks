import logo from './logo.svg';
import './App.css';
import {useState} from 'react';



const URL = 'https://api.exchangerate.host/latest'


function App() {

  const [euro, setEuro] = useState(0)
  const [gbp, setGbp] = useState(0)
  const [rate, setRate] = useState(0)
  return (
    <div id="container">
      <form onSubmit={convert}>
        <div>
        <label>Eur</label>
        <input type = "number" step = "0.01"
        value = {euro} onChange ={e =>setEuro(e.target.value)} />
        <output>{rate}</output>
        </div>
        <div>
          <label>Gbp</label>
          <output>{gbp.toFixed(2)}</output>
        </div>
        <div>
          <button>Calculate</button>
        </div>
      </form>
  
    </div>
  );
  async function convert(e){
    e.preventDefault();
    try {
      const address = URL;
      const response = await fetch(address);
  
      if(response.ok){
        const json = await response.json();
        console.log(json.rates.GBP)
        setRate(json.rates.GBP)
  
        setGbp(euro *json.rates.GBP)
      }
  
      else {
        alert ('Error retrivering exhcnage rate')
        console.log(response);
  
      }
    }
  catch (err){
    alert(err);
  }
      }
    
}


export default App;

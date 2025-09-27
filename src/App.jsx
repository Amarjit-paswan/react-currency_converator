import { useState } from 'react'
import { InputBox } from './components/input';
import useCurrencyinfo from './custom_hooks/useCurrencyinfo';
import './App.css'


function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyinfo(from);
  

  const options = Object.keys(currencyInfo);
  

  const swap = () => {
    setFrom(to),
    setTo(from),
    setConvertedAmount(amount),
    setAmount(convertedAmount)
  }

  const convert = ()=>{
    setConvertedAmount( amount * currencyInfo[to] );
    
  }

  return (
    <>
      <div className="p-3 shadow bg-white rounded">
          <form action="" className='' 
            onSubmit={
              (e) => {
                e.preventDefault();
                convert();
                }
              }>
            {/* from box container  */}
             <InputBox 
                label="From"
                amount = {amount}
                currencyOption = {options}
                onAmountChange= {(amount) => setAmount(amount)}
                onCurrencyChange = {(currency) => setFrom(currency)}

                selectCurrency = {from}
             />
            {/* swap box container */}
            <div className="swap_box d-flex justify-content-center align-items-center">
              <button onClick={swap} type='button' className="swapItem fs-2 border-0 bg-transparent py-0 my-2 px-3">🔀</button>
            </div>
            {/* to box container  */}
            <InputBox 
                label="To"
                amount = {convertedAmount}
                currencyOption = {options}
                onCurrencyChange = {(currency) => setTo(currency)}
                selectCurrency = {to}
                amountDisable
             />
            {/* submit btn container  */}
            <div className="d-grid mt-3">
              <button type='submit' className="btn btn-success">Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
            </div>

          </form>
      </div>
    </>
  )
}

export default App

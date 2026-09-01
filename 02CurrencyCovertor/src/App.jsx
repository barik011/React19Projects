import { useState } from 'react';
import './App.css'
import InputBox from './components/InputBox'
import useCurrencyInfo  from './hooks/useCurrencyInfo';

function App() {

  
  const [amount,setAmount] = useState(0);
  const [to,setTo] = useState('usd');
  const [from,setFrom] = useState('inr');
  const [convertedAmt,setconvertedAmt] = useState(0);
const currencyInfo = useCurrencyInfo(from);
  const currencyOption = Object.keys(currencyInfo);

  const swap =()=>{
    setFrom(to);
    setTo(from);
  }

  const convert = () =>{
    setconvertedAmt(amount * currencyInfo[to]);
  }

  
  return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();   
                            convert();                        
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label={from}
                                amount={amount}
                                currencyOptions={currencyOption}
                                onCurrencyChange={(currency)=>setAmount(amount)}
                                currencySelected={from}
                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                              onClick={swap}  
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label={to}
                                amount={convertedAmt}
                                currencyOptions={currencyOption}
                                onCurrencyChange={(currency)=>setTo(currency)}
                                currencySelected={to}
                                amountDisabled
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert 
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App

import { useState } from 'react'
import './App.css'
import Inputbox from './components/Inputbox'
import usecurrencyinfo from './Hooks/usecurrencyinfo'

function App() {
 

  const [amount,setamount]=useState(0) //hooks based upon the input fields
  const [to,setTo]=useState("usd")
  const [from,setfrom]=useState("inr")
  const [convertedamount,setconvertedamount]=useState(0)

  const currencyinfo=usecurrencyinfo(from)  //custom hook with api data fetch in app.jsx so api data use anywhere

  const options = Object.keys(currencyinfo)//api data in object level

  const swap = ()=>{  //swap button from-> to and to->from  change on swap button
    setfrom(to)
    setTo(from)
  }

  const convert = () => {   //calculations 
  if (!currencyinfo || !currencyinfo[to]) return
  setconvertedamount(amount * currencyinfo[to])
}

  return (
    <>

      <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/7567307/pexels-photo-7567307.jpeg')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <Inputbox
                                label="From"
                                amount={amount}
                                currencyoptions={options}
                                onCurrencychange={(currency)=>setfrom(currency)}
                                selectCurrency={from}
                                onAmountchange={(amount)=>setamount(amount)}
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
                            <Inputbox
                                label="To"
                                amount={convertedamount}
                                currencyoptions={options}
                                onCurrencychange={(currency)=>setTo(currency)}
                                selectCurrency={to}
                                amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase() } to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
      
    </>
  )
}

export default App

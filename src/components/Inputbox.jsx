import { useId } from "react";

function Inputbox({
    label,
    amount,
    onAmountchange,
    onCurrencychange,
    currencyoptions=[],
    selectCurrency,
    amountDisable=false,
    currencyDisable=false,
    classname="",
})
{
    const amountId=useId()
    return(
        <>
         <div className={`bg-white p-3 rounded-lg text-sm flex ${classname}`}>
            <div className="w-1/2">
                <label htmlFor={amountId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e)=>onAmountchange && onAmountchange(Number(e.target.value))}
                    disabled={amountDisable}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e)=>onCurrencychange && onCurrencychange(e.target.value)}
                >
                    
                       {currencyoptions.map( (currency)=>(
                        <option key={currency} value={currency}>
                            {currency.toUpperCase()}
                        </option>
                       ))}
                
                </select>
            </div>
        </div>
        </>
    )
}
export default Inputbox;
import React from "react";

function InputBox({
    label, amount, onAmountChange,
    onCurrencyChange, currencyOption,
    selectCurrency="usd", amountDisable=false,
    currencyDisable=false, className=""
    }){

     return (
         <div className={`box d-flex gap-2 ${className} `}>
              <div className="input_box d-flex flex-column justify-content-start align-items-start">
                <label htmlFor="" className="form-label fw-bold">{label}</label>
                <input type="number" name="" id="" className="form-control" placeholder='Enter Value' 
                    disabled={amountDisable} 
                    value={amount} 
                    onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))} 
                    
                />
              </div>
              <div className="current_select_box">
                <label htmlFor="" className="form-label fw-bold">Select Currency</label>
                <select name="" id="" className="form-select" 
                    value={selectCurrency} 
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled = {currencyDisable}
                >
                  {
                    currencyOption.map((curr)=> (
                         <option key={curr} value={curr}>{curr}</option>

                    ))
                  }
                </select>
              </div>

             
              
            </div>
     )   

}
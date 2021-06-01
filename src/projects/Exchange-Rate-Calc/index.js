import React, { useState } from "react";

//https://www.exchangerate-api.com/

export default function ERCPage() {
  const [value1, setValue1] = useState("");
  const [quantity1, setQuantity1] = useState(0)
  const [value2, setValue2] = useState("");
  const [quantity2, setQuantity2] = useState(0)

  function handleInputValue1(event) {
    setValue1(event.target.value);
  }
  function handleQuantityValue1(event) {
    setQuantity1(event.target.value);
  }
  function handleInputValue2(event) {
    setValue2(event.target.value);
  }
  function handleQuantityValue2(event) {
    setQuantity2(event.target.value);
  }
  const logValue = (event) => {
    setValue1(event.target.value);
    console.log(value1, "Value 1");
    console.log(quantity1, ': Quanitiy 1')
    console.log(value2, "Value 2");
    console.log(quantity2, ': Quanitiy 2')
  };

  function Button() {
    return <button onClick={Calculate}> Covert</button>;
  }
  
  function Calculate() {
    // const currency_one = currencyEl_one.value;
  
    fetch(`https://api.exchangerate-api.com/v4/latest/USD`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "USD Log");
  
        const rate = data.rates[value2];
        let exch1 = `1 ${value1} = ${rate} ${value2}`
        console.log(rate);
        console.log(exch1, 'exch1');
      });
  }
  
  function Rate() {
    return <div></div>;
  }
  return (
    <>
      <div>
        <button onClick={logValue}>Log value</button>
      </div>
      <form onChange={handleInputValue1}>
        <select id="currency-one">
          <option value="AED">AED</option>
          <option value="ARS">ARS</option>
          <option value="AUD">AUD</option>
          <option value="BGN">BGN</option>
          <option value="BRL">BRL</option>
          <option value="BSD">BSD</option>
          <option value="CAD">CAD</option>
          <option value="CHF">CHF</option>
          <option value="CLP">CLP</option>
          <option value="CNY">CNY</option>
          <option value="COP">COP</option>
          <option value="CZK">CZK</option>
          <option value="DKK">DKK</option>
          <option value="DOP">DOP</option>
          <option value="EGP">EGP</option>
          <option value="EUR">EUR</option>
          <option value="FJD">FJD</option>
          <option value="GBP">GBP</option>
          <option value="GTQ">GTQ</option>
          <option value="HKD">HKD</option>
          <option value="HRK">HRK</option>
          <option value="HUF">HUF</option>
          <option value="IDR">IDR</option>
          <option value="ILS">ILS</option>
          <option value="INR">INR</option>
          <option value="ISK">ISK</option>
          <option value="JPY">JPY</option>
          <option value="KRW">KRW</option>
          <option value="KZT">KZT</option>
          <option value="MXN">MXN</option>
          <option value="MYR">MYR</option>
          <option value="NOK">NOK</option>
          <option value="NZD">NZD</option>
          <option value="PAB">PAB</option>
          <option value="PEN">PEN</option>
          <option value="PHP">PHP</option>
          <option value="PKR">PKR</option>
          <option value="PLN">PLN</option>
          <option value="PYG">PYG</option>
          <option value="RON">RON</option>
          <option value="RUB">RUB</option>
          <option value="SAR">SAR</option>
          <option value="SEK">SEK</option>
          <option value="SGD">SGD</option>
          <option value="THB">THB</option>
          <option value="TRY">TRY</option>
          <option value="TWD">TWD</option>
          <option value="UAH">UAH</option>
          <option value="USD" defaultValue>
            USD
          </option>
          <option value="UYU">UYU</option>
          <option value="VND">VND</option>
          <option value="ZAR">ZAR</option>
        </select>
      </form>



      <input type="number" onChange={handleQuantityValue1} id="amount-one" placeholder="0"></input>
      <div>



        <form onChange={handleInputValue2}>
          <select id="currency-one">
            <option value="AED">AED</option>
            <option value="ARS">ARS</option>
            <option value="AUD" defaultValue>
              AUD
            </option>
            <option value="BGN">BGN</option>
            <option value="BRL">BRL</option>
            <option value="BSD">BSD</option>
            <option value="CAD">CAD</option>
            <option value="CHF">CHF</option>
            <option value="CLP">CLP</option>
            <option value="CNY">CNY</option>
            <option value="COP">COP</option>
            <option value="CZK">CZK</option>
            <option value="DKK">DKK</option>
            <option value="DOP">DOP</option>
            <option value="EGP">EGP</option>
            <option value="EUR">EUR</option>
            <option value="FJD">FJD</option>
            <option value="GBP">GBP</option>
            <option value="GTQ">GTQ</option>
            <option value="HKD">HKD</option>
            <option value="HRK">HRK</option>
            <option value="HUF">HUF</option>
            <option value="IDR">IDR</option>
            <option value="ILS">ILS</option>
            <option value="INR">INR</option>
            <option value="ISK">ISK</option>
            <option value="JPY">JPY</option>
            <option value="KRW">KRW</option>
            <option value="KZT">KZT</option>
            <option value="MXN">MXN</option>
            <option value="MYR">MYR</option>
            <option value="NOK">NOK</option>
            <option value="NZD">NZD</option>
            <option value="PAB">PAB</option>
            <option value="PEN">PEN</option>
            <option value="PHP">PHP</option>
            <option value="PKR">PKR</option>
            <option value="PLN">PLN</option>
            <option value="PYG">PYG</option>
            <option value="RON">RON</option>
            <option value="RUB">RUB</option>
            <option value="SAR">SAR</option>
            <option value="SEK">SEK</option>
            <option value="SGD">SGD</option>
            <option value="THB">THB</option>
            <option value="TRY">TRY</option>
            <option value="TWD">TWD</option>
            <option value="UAH">UAH</option>
            <option value="USD">USD</option>
            <option value="UYU">UYU</option>
            <option value="VND">VND</option>
            <option value="ZAR">ZAR</option>
          </select>
        </form>
        <input type="number" onChange={handleQuantityValue2} id="amount-one" placeholder="0" ></input>
      </div>

      <Button />
    </>
  );
}



import React, { useState, useEffect } from "react";
import Crypto from "./ERC-Crypto/ERC-Crypto.js";

//https://www.exchangerate-api.com/

export default function ERCPage() {
  const [currency1, SetCurrency1] = useState("");

  useEffect(() => {
    Calculate();
  }, [currency1]);

  const [quantity1, setQuantity1] = useState(0);

  useEffect(() => {
    Calculate();
  }, [quantity1]);
  const [currency2, setCurrency2] = useState("");

  useEffect(() => {
    Calculate();
  }, [currency2]);

  const [mathText, setMathText] = useState(false);

  const [rate, setRate] = useState(0);

  const [exRate, setExRate] = useState(0);
  const [exRate2, setExRate2] = useState(0);

  function handleQuantityValue1(event) {
    setQuantity1(event.target.value);
    console.log(mathText)
  }

  function handleInputValue1(event) {
    SetCurrency1(event.target.value);
  }

  function handleInputValue2(event) {
    setCurrency2(event.target.value);
  }

  function Button() {
    return (
      <>
        <button id="erc-btn" onClick={Calculate} onClick={FirstRun}>
          {" "}
          Convert
        </button>
      </>
    );
  }

  function FirstRun() {
    setMathText(true);
    console.log(mathText)
  }

  function Calculate(rate) {
    // const currency_one = currencyEl_one.value;
    // showMathText('visible')
    // event.target.style.visibility = ${mathText}

    console.log(mathText, "math state");

    fetch(`https://api.exchangerate-api.com/v4/latest/${currency1}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "USD Log");

        let rateV = data.rates[currency2];
        let exRate = `${quantity1} ${currency1} = ${rateV} ${currency2}`;
        setRate(data.rates[currency2]);
        let exRate2 = (quantity1 * rateV).toFixed(2);
        setExRate(exRate);
        setExRate2(exRate2);
      });
  }

  return (
    <>
      <div className="cer-body">
        <h1>Exchange Rate Converter</h1>
        <div className="cer-container-form">
          <div className="cer-main-row">
            <div className="cer-amount">
              <p>Amount</p>
              <div className="cer-container-amount">
                <input
                  type="number"
                  onChange={handleQuantityValue1}
                  className="amount-one"
                  placeholder="0.00"
                ></input>
              </div>
            </div>
            <div className="cer-from">
              <p>From</p>
              <form onChange={handleInputValue1}>
                <select className="currency-one">
                  <option value="AED">Select</option>
                  <option value="AED">AED - Emirati Dirham</option>
                  <option value="ARS">ARS- Argentine Peso</option>
                  <option value="AUD">AUD - Australian Dollar</option>
                  <option value="BGN">BGN- Bulgarian Lev</option>
                  <option value="BRL">BRL - Brazilian Real</option>
                  <option value="BSD">BSD - Bahamian Dollar</option>
                  <option value="CAD">CAD - Canadian Dollar</option>
                  <option value="CHF">CHF - Swiss Franc</option>
                  <option value="CLP">CLP - Chilean Peso</option>
                  <option value="CNY">CNY - Chinese Yuan Renminbi</option>
                  <option value="COP">COP - Colombian Peso</option>
                  <option value="CZK">CZK - Czech Koruna</option>
                  <option value="DKK">DKK - Danish Krone</option>
                  <option value="DOP">DOP - Dominican Peso</option>
                  <option value="EGP">EGP - Egyptian Pound</option>
                  <option value="EUR">EUR - Euro</option>
                  <option value="FJD">FJD - Fijian Dollar</option>
                  <option value="GBP">GBP - British Pound</option>
                  <option value="GTQ">GTQ - Guatemalan Quetzal</option>
                  <option value="HKD">HKD - Hong Kong Dollar</option>
                  <option value="HRK">HRK - Croatian Kuna</option>
                  <option value="HUF">HUF - Hungarian Forint</option>
                  <option value="IDR">IDR - Indonesian Rupiah</option>
                  <option value="ILS">ILS - Israeli Shekel</option>
                  <option value="INR">INR - Indian Rupee</option>
                  <option value="ISK">ISK - Icelandic Krona</option>
                  <option value="JPY">JPY - Japanese Yen</option>
                  <option value="KRW">KRW - South Korean Won</option>
                  <option value="KZT">KZT - Kazakhstani Tenge</option>
                  <option value="MXN">MXN - Mexican Peso</option>
                  <option value="MYR">MYR - Malaysian Ringgit</option>
                  <option value="NOK">NOK - Norwegian Krone</option>
                  <option value="NZD">NZD - New Zealand Dollar</option>
                  <option value="PAB">PAB - Panamanian Balboa</option>
                  <option value="PEN">PEN - Peruvian Sol</option>
                  <option value="PHP">PHP - Philippine Peso</option>
                  <option value="PKR">PKR - Pakistani Rupee</option>
                  <option value="PLN">PLN - Polish Zloty</option>
                  <option value="PYG">PYG - Paraguayan Guarani </option>
                  <option value="RON">RON - Romanian Leu</option>
                  <option value="RUB">RUB - Russian Ruble</option>
                  <option value="SAR">SAR - Saudi Arabian Riyal</option>
                  <option value="SEK">SEK - Swedish Krona</option>
                  <option value="SGD">SGD - Singapore Dollar</option>
                  <option value="THB">THB - Thai Baht</option>
                  <option value="TRY">TRY - Turkish Lira</option>
                  <option value="TWD">TWD - Taiwan New Dollar</option>
                  <option value="UAH">UAH - Ukrainian Hryvnia</option>
                  <option value="USD">USD - US Dollar</option>
                  <option value="UYU">UYU - Uruguayan Peso</option>
                  <option value="VND">VND - Vietnamese Dong</option>
                  <option value="ZAR">ZAR - South African Rand</option>
                </select>
              </form>
            </div>

            <div>
              <div className="cer-to">
                <p>To</p>
                <div className="cer-half-row2">
                  <form onChange={handleInputValue2}>
                    <select className="currency-two">
                      <option value="AED">Select</option>
                      <option value="AED">AED - Emirati Dirham</option>
                      <option value="ARS">ARS- Argentine Peso</option>
                      <option value="AUD">AUD - Australian Dollar</option>
                      <option value="BGN">BGN- Bulgarian Lev</option>
                      <option value="BRL">BRL - Brazilian Real</option>
                      <option value="BSD">BSD - Bahamian Dollar</option>
                      <option value="CAD">CAD - Canadian Dollar</option>
                      <option value="CHF">CHF - Swiss Franc</option>
                      <option value="CLP">CLP - Chilean Peso</option>
                      <option value="CNY">CNY - Chinese Yuan Renminbi</option>
                      <option value="COP">COP - Colombian Peso</option>
                      <option value="CZK">CZK - Czech Koruna</option>
                      <option value="DKK">DKK - Danish Krone</option>
                      <option value="DOP">DOP - Dominican Peso</option>
                      <option value="EGP">EGP - Egyptian Pound</option>
                      <option value="EUR">EUR - Euro</option>
                      <option value="FJD">FJD - Fijian Dollar</option>
                      <option value="GBP">GBP - British Pound</option>
                      <option value="GTQ">GTQ - Guatemalan Quetzal</option>
                      <option value="HKD">HKD - Hong Kong Dollar</option>
                      <option value="HRK">HRK - Croatian Kuna</option>
                      <option value="HUF">HUF - Hungarian Forint</option>
                      <option value="IDR">IDR - Indonesian Rupiah</option>
                      <option value="ILS">ILS - Israeli Shekel</option>
                      <option value="INR">INR - Indian Rupee</option>
                      <option value="ISK">ISK - Icelandic Krona</option>
                      <option value="JPY">JPY - Japanese Yen</option>
                      <option value="KRW">KRW - South Korean Won</option>
                      <option value="KZT">KZT - Kazakhstani Tenge</option>
                      <option value="MXN">MXN - Mexican Peso</option>
                      <option value="MYR">MYR - Malaysian Ringgit</option>
                      <option value="NOK">NOK - Norwegian Krone</option>
                      <option value="NZD">NZD - New Zealand Dollar</option>
                      <option value="PAB">PAB - Panamanian Balboa</option>
                      <option value="PEN">PEN - Peruvian Sol</option>
                      <option value="PHP">PHP - Philippine Peso</option>
                      <option value="PKR">PKR - Pakistani Rupee</option>
                      <option value="PLN">PLN - Polish Zloty</option>
                      <option value="PYG">PYG - Paraguayan Guarani </option>
                      <option value="RON">RON - Romanian Leu</option>
                      <option value="RUB">RUB - Russian Ruble</option>
                      <option value="SAR">SAR - Saudi Arabian Riyal</option>
                      <option value="SEK">SEK - Swedish Krona</option>
                      <option value="SGD">SGD - Singapore Dollar</option>
                      <option value="THB">THB - Thai Baht</option>
                      <option value="TRY">TRY - Turkish Lira</option>
                      <option value="TWD">TWD - Taiwan New Dollar</option>
                      <option value="UAH">UAH - Ukrainian Hryvnia</option>
                      <option value="USD">USD - US Dollar</option>
                      <option value="UYU">UYU - Uruguayan Peso</option>
                      <option value="VND">VND - Vietnamese Dong</option>
                      <option value="ZAR">ZAR - South African Rand</option>
                    </select>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {mathText ? 
            <div className="erc-container-dispaly-results">
              <div className="erc-dispaly-results">
              <DisplayRate
                  exRate={exRate}
                  exRate2={exRate2}
                  currency1={currency1}
                  currency2={currency2}
                  quantity1={quantity1}
                />
              </div>
            </div>
           : 
            <div className="erc-container-dispaly-results">
              <div className="erc-dispaly-results">

              </div>
            </div>
          }

          <div className="erc-conctainer-btn-row">
            <div className="erc-btn-row">
              <Button />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function DisplayRate({ exRate, exRate2, currency1, currency2, quantity1 }) {
  if (exRate === 0) {
    return <p></p>;
  } else {
    return (
      <>
        <p className="erc-standard">
          {quantity1} {currency1} =
        </p>
        <p className="erc-exchange-result">
          {exRate2} {currency2}
        </p>
      </>
    );
  }
}

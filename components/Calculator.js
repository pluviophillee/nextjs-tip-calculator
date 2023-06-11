import React from 'react';
import { useState, useEffect } from 'react';

const Calculator = () => {
    // TODO: start coding here!
    const [totalBill, setTotalBill] = useState("");
    const [tipPercentage, setTipPercentage] = useState("");
    const [numberOfPeople, setNumberOfPeople] = useState("");
    const [finalTipAmount, setFinalTipAmount] = useState(null);
    const [finalPrice, setFinalPrice] = useState(null);

    useEffect(() => {
        if (totalBill !== "" && tipPercentage !== "" && numberOfPeople !== "") {
            const bill = parseFloat(totalBill);
            const tip = parseFloat(tipPercentage);
            const people = parseFloat(numberOfPeople);

            if (bill > 0 && tip > 0 && people > 0) {
                const tipByPerson = (bill * tip / 100 / people).toFixed(2);
                const billByPerson = ((bill + tip) / people).toFixed(2);
                setFinalTipAmount(tipByPerson);
                setFinalPrice(billByPerson);
            }
        }
    }, [totalBill, tipPercentage, numberOfPeople]);
    return (
        <main>
            <img
                src="./icons/logo.svg"
                className="logo"
                alt="Splitter logo. 'SPLI' on one line and 'TTER' on another to indicate splitting."
            />
            <section className="card">
                <div className="card-left">
                    <div className="input-group" id="totalBillGroup">
                        <div className="input-label-container">
                            <label className="body-text input-label" htmlFor="totalBill">Bill</label>
                            <small className="body-text input-error" id="totalBillError">Input field is valid</small>
                        </div>
                        <input
                            type="number"
                            className="body-l-text input-field"
                            placeholder="0"
                            name="Total bill value"
                            id="totalBill"
                            value={totalBill}
                            onChange={(e) => setTotalBill(parseFloat(e.target.value))}
                        />
                    </div>

                    <div className="input-group" id="totalTipPercentageGroup">
                        <div className="input-label-container">
                            <label className="body-text input-label">Select Tip %</label>
                            <small className="body-text input-error" id="totalTipPercentageError">Input field is
                                valid</small>
                        </div>
                        <div className="input-tips-container">
                            <button className="body-l-text input-tip" id="tip5" value={5} onClick={(e) => setTipPercentage(parseFloat(e.target.value))}>5%
                            </button>
                            <button className="body-l-text input-tip" id="tip10" value={10} onClick={(e) => setTipPercentage(parseFloat(e.target.value))}>10%
                            </button>
                            <button className="body-l-text input-tip" id="tip15" value={15} onClick={(e) => setTipPercentage(parseFloat(e.target.value))}>15%
                            </button>
                            <button className="body-l-text input-tip" id="tip25" value={25}  onClick={(e) => setTipPercentage(parseFloat(e.target.value))}>25%
                            </button>
                            <button className="body-l-text input-tip" id="tip50" value={50} onClick={(e) => setTipPercentage(parseFloat(e.target.value))}>50%
                            </button>
                            <input type="number" className="body-l-text input-field" placeholder="Custom"
                                   id="totalTipPercentage" onChange={(e) => setTipPercentage(e.target.value)}></input>
                        </div>
                    </div>

                    <div className="input-group" id="numberOfPeopleGroup">
                        <div className="input-label-container">
                            <label className="body-text input-label" htmlFor="numberOfPeople">Number of People</label>
                            <small className="body-text input-error" id="numberOfPeopleError">Input field is
                                valid</small>
                        </div>
                        <input
                            type="number"
                            className="body-l-text input-field"
                            placeholder="0"
                            name="Number of people"
                            id="numberOfPeople"
                            value={numberOfPeople}
                            onChange={(e) => setNumberOfPeople(parseFloat(e.target.value))}/>
                    </div>
                </div>
                <div className="card-right">
                    <section className="card-price-container">
                        <div>
                            <b className="body-text card-price-title">Tip Amount</b>
                            <p className="body-s-text card-price-subtitle">/ person</p>
                        </div>
                        <strong className="strong-text card-price-value" id="tipAmount">{finalTipAmount > 0 ? <p>{finalTipAmount}</p>: <p>$0.00</p>}</strong>
                    </section>
                    <section className="card-price-container">
                        <div>
                            <b className="body-text card-price-title">Total</b>
                            <p className="body-s-text card-price-subtitle">/ person</p>
                        </div>
                        <strong className="strong-text card-price-value" id="totalPrice" value>{finalPrice > 0 ? <p>${finalPrice}</p> : <p>$0.00</p>}
</strong>
                    </section>
                    <button className="btn btn-primary btn-reset">Reset</button>
                </div>
            </section>
        </main>
    );
};

export default Calculator;
import React from "react";
import GreenButton from "../components/greenButton";

const line = [
    {
        "transaction" : "Argent Bank Checking (x8349)",
        "argent" : "$2,082.79",
        "balance" : "Available Balance"
    },
    {
        "transaction" : "Argent Bank Savings (x6712)",
        "argent" : "$10,928.42",
        "balance" : "Available Balance"
    },
    {
        "transaction" : "Argent Bank Checking (x8349)",
        "argent" : "$2,082.79",
        "balance" : "Available Balance"
    }
]

function BankLine() {
  return (
    <>
      {line.map((detail, index) => {
          return(
            <section className="account" key={index}>
                <div className="account-content-wrapper">
                    <h3 className="account-title">{detail.transaction}</h3>
                    <p className="account-amount">{detail.argent}</p>
                    <p className="account-amount-description">{detail.balance}</p>
                </div>
                <GreenButton />
            </section>
            )
        })
        }
    </>
  );
}

export default BankLine;

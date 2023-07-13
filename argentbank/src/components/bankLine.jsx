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
            <section class="account" key={index}>
                <div class="account-content-wrapper">
                    <h3 class="account-title">{detail.transaction}</h3>
                    <p class="account-amount">{detail.argent}</p>
                    <p class="account-amount-description">{detail.balance}</p>
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

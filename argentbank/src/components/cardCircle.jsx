import React from "react";
import chat from '../assets/img/icon-chat-min.png';
import money from '../assets/img/icon-money-min.png';
import security from '../assets/img/icon-security-min.png';

const data = [
    {
        "img" : chat,
        "title" : "You are our #1 priority",
        "text" : "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
    },
    {
        "img" : money,
        "title" : "More savings means higher rates",
        "text" : "The more you save with us, the higher your interest rate will be!"
    },
    {
        "img" : security,
        "title" : "Security you can trust",
        "text" : "We use top of the line encryption to make sure your data and money is always safe."
    }
]

function CardCircle() {
  return (
    <>
      {data.map((detail) => {
          return(
            <div className="feature-item" key={detail.title}>
                <img src={detail.img} alt="Chat Icon" className="feature-icon" />
                <h3 className="feature-item-title">{detail.title}</h3>
                <p>{detail.text}</p>
            </div>
            )
        })
        }
    </>
  );
}

export default CardCircle;

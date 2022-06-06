import React, { useState } from "react";
// icons
import { IoIosArrowRoundForward } from "react-icons/io";


export const Card = (props) => {
  const [data, setData] = useState(props.data);

  function setActive(id) {
    const newBoxCard = [...data];
    newBoxCard.map((item) =>
      item.id === id ? (item.active = true) : (item.active = false)
    );
    setData(newBoxCard);
  }

  function removeActive(id) {
    const newBoxCard = [...data];
    newBoxCard.map((item) =>
    {
        if(item.id === id ){item.active = false }
    }
    //   item.id === id ? (item.active = false) : (item.active = false)
    );
    setData(newBoxCard);
  }

  return (
    <>
      {data.map((card) => (
        <>
          <div
            key={card.id}
            onMouseEnter={() => setActive(card.id)}
            onMouseLeave={() => removeActive(card.id)}
            className={`hero__wrapper--panel ${card.active && "active"}`}
            style={{
              backgroundImage: `url(${card.image})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="hero__wrapper--panel--header">
              <img src={card.icon} alt={card.iconAlt} />
              <h3>{card.title}</h3>
            </div>
            <div className="hero__wrapper--panel--visit">
              <a target="_blank" href={card.link} className="hero__wrapper--panel--visit--button">
                view more 
              </a>
              <span><IoIosArrowRoundForward/></span> 
            </div>
          </div>
        </>
      ))}
    </>
  );
};

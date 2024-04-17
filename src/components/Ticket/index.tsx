import React from "react";
import {TicketType} from "../../data/tickets";

export const Ticket: React.FC<TicketType> = (props) => {
  const {
    origin_name,
    origin,
    destination,
    destination_name,
    departure_date,
    departure_time,
    arrival_date,
    arrival_time,
    carrier,
    stops,
    price
  } = props;
  console.log(props, origin_name);
  return (
    <div className={'flex mb-2 bg-white rounded-xl shadow-md'}>
      <div className={'border-r-2 p-2'}>
        <img src="/turkish-airlines-logo.png" alt="logo" className={'w-40 h-25'}/>
        <button className={'bg-orange-500 rounded-md text-white text-center shadow-md pointer h-12'}>
          <span>Купить за: {price}</span>
        </button>
      </div>
      <div className={'flex'}>
        <div>
          <span>{departure_time}</span>
          <span>{origin},{origin_name}</span>
          <span>{departure_date}</span>
        </div>
        <div>{stops} Пересадки</div>
        <div>
          <span>{arrival_time}</span>
          <span>{destination_name},{destination}</span>
          <span>{arrival_date}</span>
        </div>
      </div>
    </div>
  );
};
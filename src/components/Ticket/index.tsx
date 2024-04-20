import React, {useState} from "react";
import {TicketInfo} from "../TicketInfo";
import {TicketType} from "../../state/tickets";

interface IProps {
  item: TicketType;
  currency: string;
}

export const Ticket: React.FC<IProps> = ({item, currency}) => {
  const {
    origin_name,
    origin,
    destination,
    destination_name,
    departure_date,
    departure_time,
    arrival_date,
    arrival_time,
    // carrier,
    stops,
    price
  } = item;

  const [sale, setSale] = useState(false);
  const handlerSale = () => {
    setSale(!sale);
  };
  return (
    <div className={"flex mb-2 bg-white rounded-xl shadow-md"}>
      <div className={"border-r-2 p-2 w-1/5"}>
        <img src="/turkish-airlines-logo.png" alt="logo" className={"w-40 h-25"}/>

        {sale ? (
          <button
            onClick={handlerSale}
            className={"border-2 border-orange-500 bg-white p-2 rounded-md text-orange-500 text-center shadow-md pointer h-12"}
          >
            <span className={'w-[90%] text-wrap'}>Билет забронирован</span>
          </button>
        ) : (
          <button
            onClick={handlerSale}
            className={"bg-orange-500 p-2 rounded-md text-white text-center shadow-md pointer h-12"}
          >
            <span className={'w-[90%]'}>Купить за: {price} {currency}</span>
          </button>
        )}

      </div>
      <div className={"flex p-5 justify-between"}>
        <TicketInfo
          date={departure_date}
          origin={origin}
          name={origin_name}
          time={departure_time}
        />
        <div className={"text-sl text-slate-500 mx-2"}>{stops} Пересадки</div>
        <TicketInfo
          date={arrival_date}
          origin={destination_name}
          name={destination}
          time={arrival_time}
        />
      </div>
    </div>
  );
};
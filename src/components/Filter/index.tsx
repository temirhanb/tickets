import {useState} from "react";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../state/store";
import {filterTicketsThunk} from "../../state/thunk/filterTickets";

export const Filter = () => {

  const dispatch = useDispatch<AppDispatch>();

  const [currentCurrency, setCurrentCurrency] = useState("RUB");
  const changeCurrency = (currency: string) => {
    dispatch(filterTicketsThunk(currency));
    setCurrentCurrency(currency);
  };
  console.log(currentCurrency);
  return (
    <div className={"flex mr-4 bg-white rounded-xl shadow-md static w-80 h-1/3 flex-col p-4"}>
      <div className={"flex flex-col"}>
        <h1>Валюта</h1>
        <div className={'flex'}>

          <input
            type="checkbox"
            onClick={() => changeCurrency("RUB")}
            checked={currentCurrency === "RUB"}
            className={`hidden
            checked:child:text-red
            `}
          />
          <div
            onClick={() => changeCurrency("RUB")}
            className={`
              relative
              p-5 border-2 rounded-l-md hover:border-sky-500 hover:border-2
              before:content-['RUB']  
          `}/>

          <input
            type="checkbox"
            onClick={() => changeCurrency("USD")}
            checked={currentCurrency === "USD"}
            className={`hidden
            checked:child:text-red
            `}
          />
          <div
            onClick={() => changeCurrency("USD")}
            className={`
              relative
              p-5 border-t-2 border-b-2 hover:border-sky-500 hover:border-2
              before:content-['USD']  
          `}/>

          <input
            type="checkbox"
            onClick={() => changeCurrency("EUR")}
            checked={currentCurrency === "EUR"}
            className={`hidden
            checked:child:text-red
            `}
          />
          <div
            onClick={() => changeCurrency("EUR")}
            className={`
              relative
              p-5 border-2 rounded-r-md hover:border-sky-500 hover:border-2
              before:content-['EUR']  
          `}/>

        </div>
      </div>
      <div>
        <h1>Количество пересадок</h1>
        <div>
          <div className={"flex items-center pointer mb-2"}>
            <input className={"w-6 h-6 mr-2"} type="checkbox"/>
            <span>Без пересадок</span>
          </div>
          <div className={"flex items-center pointer mb-2"}>
            <input className={"w-6 h-6 mr-2"} type="checkbox"/>
            <span>1 пересадка</span>
          </div>
          <div className={"flex items-center pointer mb-2"}>
            <input className={"w-6 h-6 mr-2"} type="checkbox"/>
            <span>2 пересадки</span>
          </div>
          <div className={"flex items-center pointer mb-2"}>
            <input className={"w-6 h-6 mr-2"} type="checkbox"/>
            <span>3 пересадки</span>
          </div>
        </div>
      </div>
    </div>
  );
};
import {useState} from "react";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../state/store";
import {filterTicketsThunk} from "../../state/thunk/filterTickets";
import {ButtonCurrency} from "../ButtonCurrency";

const CURRENCYS: Array<string> = ["RUB", "USD", "EUR"];
export const Filter = () => {

  const dispatch = useDispatch<AppDispatch>();

  const [checkCurrency, setCheckCurrency] = useState("RUB");
  const changeCurrency = (currency: string) => {
    dispatch(filterTicketsThunk(currency));
    setCheckCurrency(currency);
  };

  return (
    <div className={"flex mr-4 bg-white rounded-xl shadow-md static w-80 h-1/3 flex-col p-4"}>
      <div className={"flex flex-col"}>
        <h1>Валюта</h1>
        <div className={"flex"}>
          {CURRENCYS.map((item, index) => (
            <ButtonCurrency
              changeCurrency={changeCurrency}
              currentCurrency={item}
              checkCurrency={checkCurrency}
            />))}
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
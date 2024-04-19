import {useDispatch} from "react-redux";
import {AppDispatch} from "../../state/store";
import {filterTicketsThunk} from "../../state/thunk/filterTickets";

export const Filter = () => {

  const dispatch = useDispatch<AppDispatch>();
  const changeCurrency = (currency: string) => {
    dispatch(filterTicketsThunk(currency));
  };
  return (
    <div className={"flex mr-4 bg-white rounded-xl shadow-md static w-80 h-1/3 flex-col p-4"}>
      <div className={'flex flex-col'}>
        <h1>Валюта</h1>
        <div>
          <button className={'p-5 border-2 rounded-md hover:border-sky-500'} onClick={() => changeCurrency("RUB")}><span>RUB</span></button>
          <button className={'p-5 border-2 rounded-md hover:border-sky-500'} onClick={() => changeCurrency("USD")}><span>USD</span></button>
          <button className={'p-5 border-2 rounded-md hover:border-sky-500'} onClick={() => changeCurrency("EUR")}><span>EUR</span></button>
        </div>
      </div>
      <div>
        <h1>Количество пересадок</h1>
        <div>
          <span>Без пересадок</span>
          <span>1 пересадка</span>
          <span>2 пересадки</span>
          <span>3 пересадки</span>
        </div>
      </div>
    </div>
  );
};
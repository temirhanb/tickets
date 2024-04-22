import {useMemo, useState} from "react";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../state/store";
import {filterTicketsThunk} from "../../state/thunk/filterTickets";
import {ButtonCurrency} from "../ButtonCurrency";
import {useFormik} from "formik";

const CURRENCYS: Array<string> = ["RUB", "USD", "EUR"];
export const Filter = () => {

  const dispatch = useDispatch<AppDispatch>();

  const [checkCurrency, setCheckCurrency] = useState("RUB");
  const formik = useFormik({
    initialValues: {
      stops: [],
      currency: "RUB"
    },
    onSubmit: () => {
    },
  });
  const changeCurrency = (currency: string) => {
    formik.setFieldValue("currency", currency);
    setCheckCurrency(currency);
  };

  useMemo(() => {
    dispatch(filterTicketsThunk(formik.values));
  }, [formik.values]);

  console.log(formik);
  return (
    <div className={"flex mr-4 bg-white rounded-xl shadow-md static w-80 h-1/3 flex-col p-4"}>
      <form onSubmit={formik.handleSubmit}>
        <div className={"flex flex-col"}>
          <h1>Валюта</h1>
          <div className={"flex"}>
            {CURRENCYS.map((item, index) => (
              <ButtonCurrency
                changeCurrency={changeCurrency}
                currentCurrency={item}
                key={index + item}
                checkCurrency={checkCurrency}
              />))}
          </div>
        </div>
        <div>
          <h1>Количество пересадок</h1>
          <div>
            <div className={"flex items-center pointer mb-2"}>
              <input
                name={"stops"}
                onChange={formik.handleChange}
                value={0}
                className={"w-6 h-6 mr-2"} type="checkbox"/>
              <span>Без пересадок</span>
            </div>
            <div className={"flex items-center pointer mb-2"}>
              <input
                className={"w-6 h-6 mr-2"}
                name={"stops"}
                onChange={formik.handleChange}
                value={1}
                type="checkbox"
              />
              <span>1 пересадка</span>
            </div>
            <div className={"flex items-center pointer mb-2"}>
              <input
                name={"stops"}
                onChange={formik.handleChange}
                value={2}
                className={"w-6 h-6 mr-2"} type="checkbox"/>
              <span>2 пересадки</span>
            </div>
            <div className={"flex items-center pointer mb-2"}>
              <input
                name={"stops"}
                value={3}
                onChange={formik.handleChange}
                className={"w-6 h-6 mr-2"} type="checkbox"/>
              <span>3 пересадки</span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
import React from "react";
import "./buttonCurrencyStyle.css";

interface IProps {
  changeCurrency: (item: string) => void;
  currentCurrency: string;
  checkCurrency: string;
}

export const ButtonCurrency: React.FC<IProps> = (
  {changeCurrency, currentCurrency, checkCurrency}
) => {

  console.log(currentCurrency === checkCurrency);
  return (
    <>
      <input
        type="radio"
        checked={currentCurrency === checkCurrency}
        id={"input--currency-checkbox"}
      />
      <div
        onClick={() => changeCurrency(currentCurrency)}
        id={"div--currency-checkbox"}
        className={`before:content-['${currentCurrency}']`}
      />
    </>
  );
};
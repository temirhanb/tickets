import React from "react";

interface IProps {
  time: string;
  origin: string;
  name: string;
  date: string;
}

export const TicketInfo: React.FC<IProps> = (
  {
    time,
    origin,
    name,
    date
  }) => {
  return (
    <div className={"flex flex-col"}>
      <span className={"text-5xl"}>{time}</span>
      <span className={"text-xl"}>{origin},{name}</span>
      <span className={"text-sl text-slate-500"}>{date}</span>
    </div>
  );
};
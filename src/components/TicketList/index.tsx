import {Ticket} from "../Ticket";
import {useSelector} from "react-redux";
import {RootState} from "../../state/store";

export const TicketList = () => {

  const {tickets} = useSelector((state: RootState) => state.tickets);

  return (
    <div className={"w-2/3"}>
      {tickets.map((item, index) => <Ticket key={index} {...item}/>)}
    </div>
  );
};
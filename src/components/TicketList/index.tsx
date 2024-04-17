import {DATA} from "../../data/tickets";
import {Ticket} from "../Ticket";

export const TicketList = () => {

  return (
    <div>
      {DATA.tickets.map(item => <Ticket {...item}/>)}
    </div>
  );
};
import {Ticket} from "../Ticket";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../state/store";
import {useEffect} from "react";
import {fetchTicketsThunk} from "../../state/thunk/fetchTickets";

export const TicketList = () => {

  const dispatch = useDispatch<AppDispatch>()
  const {tickets} = useSelector((state: RootState) => state.tickets);
  useEffect(() => {
    dispatch(fetchTicketsThunk());
  }, [dispatch]);

  return (
    <div className={"w-2/3"}>
      {tickets.map((item, index) => <Ticket key={index} {...item}/>)}
    </div>
  );
};
import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {API} from "../../shared/api";
import {TicketType} from "../tickets";

export const fetchTicketsThunk = createAsyncThunk<TicketType[]>('tickets/fetch', async () => {
  const {data} = await axios.get<TicketType[]>(API);

  return data;
});
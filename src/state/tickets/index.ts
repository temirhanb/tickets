import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {fetchTicketsThunk} from "../thunk/fetchTickets";
import {StatusRequest} from "../../shared/enums";

export type TicketType = {
  "origin": string,
  "origin_name": string,
  "destination": string,
  "destination_name": string,
  "departure_date": string,
  "departure_time": string,
  "arrival_date": string,
  "arrival_time": string,
  "carrier": string,
  "stops": number,
  "price": number
}

export interface ITicketsState {
  tickets: Array<TicketType>;
  status: StatusRequest;

}

const initialState: ITicketsState = {
  tickets: [],
  status: StatusRequest.LOADING
};

export const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {

    getUSD:()=>{

    }
  },

  extraReducers:(builder)=>{
    builder.addCase(fetchTicketsThunk.pending, (state) => {
      state.status = StatusRequest.LOADING;
      state.tickets = [];
    });
    builder.addCase(fetchTicketsThunk.rejected, (state) => {
      state.status = StatusRequest.ERROR;
      state.tickets = [];
    });
    builder.addCase(fetchTicketsThunk.fulfilled, (state, action: PayloadAction<TicketType[]>) => {
      state.status = StatusRequest.SUCCESS;
      state.tickets = action.payload;
    });
  }
})


export default ticketsSlice.reducer
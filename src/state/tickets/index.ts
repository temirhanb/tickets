import type {PayloadAction} from "@reduxjs/toolkit";
import {createSlice} from "@reduxjs/toolkit";
import {fetchTicketsThunk} from "../thunk/fetchTickets";
import {CurrentCurrency, StatusRequest} from "../../shared/enums";
import {filterTicketsThunk} from "../thunk/filterTickets";

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
  currency: string;
}

const initialState: ITicketsState = {
  tickets: [],
  status: StatusRequest.LOADING,
  currency: CurrentCurrency.RUB
};

export const ticketsSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {

    getUSD: () => {

    }
  },

  extraReducers: (builder) => {
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

    builder.addCase(filterTicketsThunk.pending, (state) => {
      state.status = StatusRequest.LOADING;

    });
    builder.addCase(filterTicketsThunk.rejected, (state) => {
      state.status = StatusRequest.ERROR;
    });
    builder.addCase(filterTicketsThunk.fulfilled, (state, action) => {
      state.status = StatusRequest.SUCCESS;
      state.tickets = action.payload.models;
      state.currency = action.payload.currency;
    });
  }
});

export default ticketsSlice.reducer;
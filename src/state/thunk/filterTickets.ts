import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {API} from "../../shared/api";

interface IFetch {
  stops: Array<string>;
  currency: string;
}

export const filterTicketsThunk = createAsyncThunk("tickets/filter",
  async (values: IFetch) => {
    const {data} = await axios.post(API, values);

    return data;
  });
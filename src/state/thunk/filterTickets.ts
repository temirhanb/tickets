import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {API} from "../../shared/api";

export const filterTicketsThunk = createAsyncThunk("tickets/filter",
  async (currency: string) => {
    const {data} = await axios.post(API, {currency});

    return data;
  });
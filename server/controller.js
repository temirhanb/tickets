import {db} from "./data.js";

export const getAll = (req, res) => {

  res.status(200).json(db.sort((a, b) => {
    if (a.price > b.price) {
      return 1;
    }
    if (a.price < b.price) {
      return -1;
    }
    return 0;
  }));
};

export const filterTickets = (req, res) => {

  const currency = req.body.currency;
  const stops = req.body.stops;

  if (stops.length === 0) {
    res.status(201).json({
      models: db.map((item) => {
        if (currency === "USD") return {...item, price: Number((item.price / 80).toFixed(2))};
        else if (currency === "EUR") return {...item, price: Number((item.price / 90).toFixed(2))};
        else return {...item};
      }),
      currency
    });
  }

  const filteredTickets = [];

  db.forEach(item => {
    for (let key in stops) {
      if (item.stops === Number(stops[key])) {
        return filteredTickets.push(item);
      }
    }
  });

  res.status(201).json({
    models: filteredTickets.map((item) => {
      if (currency === "USD") return {...item, price: Number((item.price / 80).toFixed(2))};
      else if (currency === "EUR") return {...item, price: Number((item.price / 90).toFixed(2))};
      else return {...item};
    }),
    currency
  });
};
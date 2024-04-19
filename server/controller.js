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
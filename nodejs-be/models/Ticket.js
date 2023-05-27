const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const ticketSchema = Schema(
  {
    start: { type: String, required: true },
    end: { type: String, required: true },
    departureDay: { type: Date },
    arrivalDate: { type: Date },
    time: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);


const Ticket = model("Ticket", ticketSchema);
module.exports = Ticket;
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const tripSchema = new Schema(
  {
    start: { type: String, required: true },
    end: { type: String, required: true },
    departureDay: { type: String, required: true },
    arrivalDate: { type: String, required: true },
    time: { type: String, required: true },
  },
  {
    versionKey: false,
  },
);

const Trip = model('Trip', tripSchema);

module.exports = Trip;

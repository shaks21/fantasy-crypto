import { Schema, model } from 'mongoose';

const cryptocurrencySchema = new Schema({
  name: { type: String, required: true },
  symbol: { type: String, required: true },
  price: { type: Number, required: true },
  // Add more fields as needed
});

const Cryptocurrency = model('Cryptocurrency', cryptocurrencySchema);

export default Cryptocurrency;

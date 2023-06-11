import { Schema, model } from 'mongoose';

const portfolioSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  cryptocurrencies: [
    {
      cryptocurrencyId: { type: Schema.Types.ObjectId, ref: 'Cryptocurrency', required: true },
      quantity: { type: Number, required: true },
    }
  ],
  // Add more fields as needed
});

const Portfolio = model('Portfolio', portfolioSchema);

export default Portfolio;

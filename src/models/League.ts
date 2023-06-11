import { Schema, model } from 'mongoose';

const leagueSchema = new Schema({
  name: { type: String, required: true },
  participants: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  // Add more fields as needed
});

const League = model('League', leagueSchema);

export default League;

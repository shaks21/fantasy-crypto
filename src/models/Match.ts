import { Schema, model } from 'mongoose';

const matchSchema = new Schema({
  leagueId: { type: Schema.Types.ObjectId, ref: 'League', required: true },
  participant1: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  participant2: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  result: { type: String, enum: ['Win', 'Loss', 'Draw'], required: true },
  // Add more fields as needed
});

const Match = model('Match', matchSchema);

export default Match;

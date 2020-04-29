import * as mongoose from 'mongoose';

const CrushSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  nickname: {
    type: String,
    required: true,
    unique: true
  },
  number: {
    type: String,
    required: true,
    unique: true
  }
}, {
  timestamps: true
});

export default mongoose.model('crushes', CrushSchema);
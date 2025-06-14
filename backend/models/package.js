import mongoose from 'mongoose';

const packageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  duration: { type: String, required: true },
  highlights: { type: [String], required: true }
});

const Package = mongoose.model('Package', packageSchema);

export default Package;

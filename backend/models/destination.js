import mongoose, { Mongoose , Schema } from "mongoose";
const destinationSchema = new mongoose.Schema({
  placeName: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true }
}  
)
const Destination = mongoose.model('Destination', destinationSchema);

export default Destination;
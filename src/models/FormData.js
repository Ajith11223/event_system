import mongoose from 'mongoose';

const FormDataSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gender: { type: String, required: true },
  dob: { type: Date, required: true },
  mobileNumber: { type: String, required: true },
  whatsappNumber: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  occupation: { type: String},
  school: { type: String},
  confirmation: { type: Boolean},
  status: { type: String},
  eventId: { type: String},
});

export default mongoose.models.FormData || mongoose.model('FormData', FormDataSchema);

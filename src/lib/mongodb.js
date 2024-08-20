import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb+srv://ajithm12aji:aGWLtv0xuNuSpAka@eventdb.us6k5.mongodb.net/?retryWrites=true&w=majority&appName=eventDB'


let isConnected;

export default async function connectToDatabase() {
  if (isConnected) {
    return;
  }

  const db = await mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  isConnected = db.connections[0].readyState;
}


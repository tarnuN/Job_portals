import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    mongoose.connection.on('connected', () =>
      console.log('✅ MongoDB connected successfully')
    );

    mongoose.connection.on('error', (err) =>
      console.error('❌ MongoDB connection error:', err)
    );

    await mongoose.connect(`${process.env.MONGODB_URI}/Insider_Jobs`);
  } catch (error) {
    console.error('❌ Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

export default connectDB;

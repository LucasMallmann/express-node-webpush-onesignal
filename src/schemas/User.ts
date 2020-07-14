import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    subscriptions: {
      type: [String],
      required: false,
      default: [],
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('User', UserSchema);

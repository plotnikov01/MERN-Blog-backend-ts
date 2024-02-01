import mongoose, { Schema, Model } from 'mongoose';
import { UserInterface } from '../global';

const UserSchema: Schema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    avatarUrl: String,
  },
  {
    timestamps: true,
  },
);

const UserModel: Model<UserInterface> = mongoose.model<UserInterface>('User', UserSchema);

export default UserModel;

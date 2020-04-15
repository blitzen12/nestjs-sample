import * as mongoose from 'mongoose';
import { User } from '../model/User';
import * as uniqueValidator from 'mongoose-unique-validator';

export const UserSchema: mongoose.Schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
  },
  firstName: {
    type: String,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
  },
}, {
  timestamps: true,
});

UserSchema.plugin(uniqueValidator, { message: '{PATH} already exists' });

export const UserModel: mongoose.Model<User> = mongoose.model<User>('User', UserSchema);

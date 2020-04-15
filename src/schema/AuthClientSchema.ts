import * as mongoose from 'mongoose';
import { AuthClient } from '../model/AuthClient';

export const AuthClientSchema: mongoose.Schema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
}, {
  timestamps: true,
  strict: false,
});
export const AuthClientModel: mongoose.Model<AuthClient> = mongoose.model<AuthClient>('AuthClient', AuthClientSchema);

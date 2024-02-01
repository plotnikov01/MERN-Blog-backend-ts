import { Document } from 'mongoose';

interface UserInterface extends Document {
  fullName: string;
  email: string;
  passwordHash: string;
  avatarUrl?: string;
  body: any;
  _doc: any;
}

export { UserInterface };

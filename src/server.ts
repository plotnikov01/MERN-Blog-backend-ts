import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import { registerValidation, loginValidation } from './validations';
import { handleValidationErrors } from './utils/index.js';

import { UserController } from './controllers/index';

dotenv.config();
mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(() => console.log('DB ok'))
  .catch((err) => console.log('DB error', err));

const app = express();

app.use(express.json());
app.use(cors());

// @ts-ignore
app.post('/auth/login', loginValidation, handleValidationErrors, UserController.login);
// @ts-ignore
app.post('/auth/register', registerValidation, handleValidationErrors, UserController.register);

app.listen(process.env.PORT, () => {
  console.log('Server OK');
});

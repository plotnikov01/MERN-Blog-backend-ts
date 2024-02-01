import { body, ValidationChain } from 'express-validator';

export const loginValidation: ValidationChain[] = [
  body('email', 'Invalid email format').isEmail(),
  body('password', 'Password must be at least 5 characters long').isLength({ min: 5 }),
];

export const registerValidation: ValidationChain[] = [
  body('email', 'Invalid email format').isEmail(),
  body('password', 'Password must be at least 5 characters long').isLength({ min: 5 }),
  body('fullName', 'Please provide your full name').isLength({ min: 3 }),
  body('avatarUrl', 'Invalid avatar URL').optional().isURL(),
];

export const postCreateValidation: ValidationChain[] = [
  body('title', 'Please enter a title for the post').isLength({ min: 3 }).isString(),
  body('text', 'Please enter the text of the post').isLength({ min: 3 }).isString(),
  body('tags', 'Invalid tags format').optional().isString(),
  body('imageUrl', 'Invalid image URL').optional().isString(),
];

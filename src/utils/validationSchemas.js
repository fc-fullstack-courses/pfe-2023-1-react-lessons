import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(8).max(16),
  code: yup.number(),
});
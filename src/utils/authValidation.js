import * as yup from 'yup';

export const schemaRegister = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  confirmPassword: yup.string().required(),
});

export const schemaLogin = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

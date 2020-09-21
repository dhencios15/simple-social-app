import * as yup from 'yup';

export const schemaPost = yup.object().shape({
  body: yup.string().required(),
});

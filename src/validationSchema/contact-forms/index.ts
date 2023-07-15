import * as yup from 'yup';

export const contactFormValidationSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  message: yup.string().required(),
  organization_id: yup.string().nullable(),
});

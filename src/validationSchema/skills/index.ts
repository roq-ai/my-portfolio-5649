import * as yup from 'yup';

export const skillValidationSchema = yup.object().shape({
  name: yup.string().required(),
  organization_id: yup.string().nullable(),
});

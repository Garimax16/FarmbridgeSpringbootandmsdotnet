import * as Yup from 'yup';

export const phoneRegExp = /^[0-9]{10}$/;
export const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const registrationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string()
    .matches(phoneRegExp, 'Phone number must be 10 digits')
    .required('Phone number is required'),
  address: Yup.string().required('Address is required'),
  password: Yup.string()
    .matches(
      passwordRegExp,
      'Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character'
    )
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
});

export const loginSchema = Yup.object({
  identifier: Yup.string().required('Email or Phone number is required'),
  password: Yup.string().required('Password is required'),
});

export const forgotPasswordSchema = Yup.object({
  identifier: Yup.string().required('Email or Phone number is required'),
});
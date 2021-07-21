import * as yup from "yup";

const formSchema = yup.object().shape   ({
    name: yup 
    .string()
    .trim()
    .required('Your name is a requirement')
    .min(4, 'Username must be 4 characters long')
    .max(10, "Username cannot be more than 10 characters long"),
    email: yup
    .string()
    .email('Must be valid email address')
    .required('Email is required'),
    role: yup
    .string()
    .oneOf(['instructor', 'student', 'alumni', 'tl'], 'Role is required'),
    civil: yup
    .string()
    .oneOf(['single', 'married'], 'Civil status is required'),
coding: yup.boolean(),
reading: yup.boolean(),
hiking: yup.boolean()
})

export default formSchema
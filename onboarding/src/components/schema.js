import * as yup from "yup";

const formSchema = yup.object().shape({
    name: yup.string().required('username is required').min(6, 'username requires at least 6 chars'),
    email: yup.string().required('email is required'),
    password: yup.string().required('password is required'),
    terms: yup.boolean().oneOf([true], 'you must agree to the terms of service')
})

export default formSchema

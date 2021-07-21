import * as yup from "yup";

const formSchema = yup.object().shape   ({
    name: yup 
    .string()
    .trim()
    .required('Your name is a requirement')
})
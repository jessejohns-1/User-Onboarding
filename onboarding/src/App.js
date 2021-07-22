import { reach } from 'yup'
import './App.css';
import React, {useState,useEffect} from 'react'
import axios from "axios"
import schema from "./components/schema"
import User from './components/User';
import UserForm from './components/UserForm';
// initial form values just sort of a structure for everything
const initalFormValues = {
  name:'',
  email:'',
  password:'',
  terms: false
}
//same thing but now for the errors don't need terms it's truth/false
const initalFormErrors = {
  name:'',
  email:'',
  password:'',

}


const initialDisabled = true

export default function App() {

  //my state variables 
  const [users, setUsers] = useState([])
  const [formValues, setFormValues] = useState(initalFormValues)
  const [formErrors, setFormErrors] = useState(initalFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)
  
  
//   const getUsers = () => {
//     axios.get("https://reqres.in/api/users")
//     .then(res => {
//       setUsers(res.data)
      
//     })
//     .catch(err => {
//       console.log(err)
//     })

// }
const postNewUser = newUser => {
  axios.post("https://reqres.in/api/users", newUser)
  .then(res => {
    setUsers([res.data, ...users])
  })
  .catch(err => {
    console.log(err)
  })
  .finally(() => {
    setFormValues(initalFormValues)
  })
}

const validate = (name, value) => {
  reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({...formErrors, [name]: ''}))
    .catch(err => setFormErrors({...formErrors,[name]: err.errors[0]}))
}

const inputChange = (name, value) => {
  validate(name, value)
  setFormValues({
  ...formValues,[name]: value
  })
}

const userSubmit = () => {
  const newUser ={
    name: formValues.name.trim(),
    email: formValues.email.trim(),
    password: formValues.password.trim(),
    terms: ['terms'].filter(term => formValues[term])
  }
  postNewUser(newUser)
}
useEffect(() => 
  {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  //[formValues] to run when any form value changes are detected
  }, [formValues])


return (
  <div className='container'>
    <header><h1>User app</h1></header>

    <UserForm
      values={formValues}
      change={inputChange}
      submit={userSubmit}
      disabled={disabled}
      errors={formErrors}
    />

    {
      users.map(user => {
        return (
          <User key={user.id} details={user} />
        )
      })
    }
  </div>
)
}




import React from "react"

export default function UserForm(props) {
    const{
        values,
        submit,
        change,
        disabled,
        errors,
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
    submit()
    }

    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === "checkbox" ? checked : value

        change(name, valueToUse)
    }


    return (
    <form className='form container' onSubmit={onSubmit}>
        <div className="form-group submit">
        
        <button disabled={disabled}id="submitBtn">Submit</button>    
                <h2>Add a user</h2>
            <div className="errors">
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.terms}</div>
            </div>

            <div className='form-group inputs'>
            <h4>General information</h4>

            <label>Username;
                <input 
                value={values.name}
                onChange={onChange}
                name="name"
                type="text"
                    />
             </label>
             <label>Email:
                 <input
                 value={values.email}
                 onChange={onChange}
                 name="email"
                 type="text"
                 />
             </label>
                <label>Password:
                    <input
                    value={values.password}
                    onChange={onChange}
                    name="password"
                    type="text"
                    />
                </label>
                <label>Do you agree to terms of service?
                    <input
                    value={values.terms}
                    onChange={onChange}
                    name='terms'
                    type='checkbox'
                    />
                </label>
            </div>
        </div>
    </form>
)}




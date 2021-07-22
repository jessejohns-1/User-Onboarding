import React from 'react'

function User({details}) {
    if(!details){
        return <h3>Fetching your user details my dude</h3>
    }

    return( 
        <div className='user container'>
            <h2>Username:{details.name}</h2>
            <p>Email:{details.email}</p>
            <p>Password:{details.password}</p>
            <p>Agreed to:{details.terms}</p>
        </div>
    )
}

export default User
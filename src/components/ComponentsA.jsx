import React, { createContext, useState } from 'react'
import ComponentsB from './ComponentsB'

export const UserContext = createContext()

function ComponentsA() {

    const [user, setUser] = useState("BroCode")
    return (
        <div className='box'>
            <h1>ComponentsA</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value={user}>
                <ComponentsB user={user} />
            </UserContext.Provider>
        </div>
    )
}

export default ComponentsA
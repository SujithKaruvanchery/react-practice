import React, { useContext } from 'react'
import ComponentsC from './ComponentsC'
import { UserContext } from './ComponentsA'

function ComponentsB() {

    const user = useContext(UserContext)

    return (
        <div className='box'>
            <h1>ComponentsB</h1>
            <h2>{`Hello again ${user}`}</h2>
            <ComponentsC />
        </div>
    )
}

export default ComponentsB
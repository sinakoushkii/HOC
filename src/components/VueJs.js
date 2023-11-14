import React from 'react'
import UpdatedComponent from "../Hoc"

function VueJs({ handelIncrease, title, price }) {
    return (
        <div>
            <h2>Course: {title}</h2>
            <h3>Price {price}</h3>
            <button onClick={handelIncrease}>Increase</button>
        </div>
    )
}
export default UpdatedComponent(VueJs,"Vue JS",2000)

import React from 'react'
import UpdatedComponent from "../Hoc"

function Angular({ handelIncrease, title, price }) {
    return (
        <div>
            <h2>Course: {title}</h2>
            <h3>Price {price}</h3>
            <button onClick={handelIncrease}>Increase</button>
        </div>
    )
}

export default UpdatedComponent(Angular, "Angular JS", 4000)
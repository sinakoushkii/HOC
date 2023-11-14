import React from 'react'
import { useState } from 'react'

function UpdatedComponent(WrappedCommponent,title,coursePrice) {

    function NewComponent() {
        const [price, setPrice] = useState(coursePrice);
        const handelIncrease = () => {
            setPrice(previousPrice => previousPrice * 2)
        }

        return <WrappedCommponent handelIncrease={handelIncrease} title={title} price={price}/>
    }
    return NewComponent
}

export default UpdatedComponent;
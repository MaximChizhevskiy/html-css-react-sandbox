import React, {useState} from "react";

export default {
    title: 'UseState demo'
}


export const MainComponent = () => {
    console.log("Main Component")
    const [counter, setCounter] = useState(0)

    return (<>

            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
        </>
    )
}
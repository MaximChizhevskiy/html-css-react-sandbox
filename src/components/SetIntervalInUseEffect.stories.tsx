import React, {useEffect, useState} from "react";

export default {
    title: 'setInterval in UseEffect demo'
}

export const MainComponent = () => {
    console.log("Main Component")
    const [counter, setCounter] = useState(1)

    useEffect(() => {
        setInterval(() => {
            setCounter((state) => state + 1)
        }, 1000)

    }, [])

    return (<>
            Timer: {counter}
        </>
    )
}
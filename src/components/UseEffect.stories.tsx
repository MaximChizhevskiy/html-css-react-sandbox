import React, {useEffect, useState} from "react";

export default {
    title: 'UseEffect demo'
}

export const MainComponent = () => {
    console.log("Main Component")
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    useEffect(() => {
        console.log("useEffect every time render")

        document.title = counter.toString()
    })

    useEffect(() => {
        console.log("useEffect first render & when counter changed")

        document.title = counter.toString()
    }, [counter])

    useEffect(() => {
        console.log("useEffect only first render (componentDidMount)")

        document.title = counter.toString()
    }, [])

    return (<>

            <button onClick={() => setCounter(counter + 1)}>Counter+</button>
            <button onClick={() => setFake(fake + 1)}>Fake+</button>
            {counter}_{fake}
        </>
    )
}

export const KeyTrackerExample = () => {
    const [text, setText] = useState('')
    console.log('Component rendered with' + text)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }

        window.addEventListener('keypress', handler)

        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [text]);

    return <>
        Typed text : {text}
    </>
}

export const setTimeOutExample = () => {
    const [text, setText] = useState('')
    console.log('Component rendered with ' + text)

    useEffect(() => {
        const timeOutId = setTimeout(() => {
            console.log('TIMEOUT EXPIRED')
            setText('3 seconds passed')
        }, 3000)

        return () => {
            clearTimeout(timeOutId)
        }
    }, []);

    return <>
        text: {text}
    </>
}
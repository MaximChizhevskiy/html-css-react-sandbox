import {ChangeEvent, useRef, useState} from "react";

export default {
    title: 'Uncontrolled input',
}

export const UncontrolledInput = () => <input/>

export const ControlledInputWithFixedValue = () => <input value={"input value"}/>

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value
        setValue(actualValue)
    }

    return <>
        <input value={value} onChange={onChange}/> input value = {value}
    </>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return <>
        <input ref={inputRef}/>
        <button onClick={save}>Get input Value</button>
        Actual value: {value}
    </>
}

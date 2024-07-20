import {Select} from "./Select";
import {useState} from "react";

export default {
    title: 'Select'
}
const itemsArray = [
    {value: "1", title: "Astana"},
    {value: "2", title: "Moscow"},
    {value: "3", title: "Minsk"},
    {value: "4", title: "Kiev"},
    {value: "5", title: "Bishkek"}
]

export const SelectWithValue = () => {
    const [value, setValue] = useState('2')
    return <>
        <Select items={itemsArray}
                onChange={setValue}
                value={value}/>
    </>
}

export const SelectWithoutValue = () => {
    const [value, setValue] = useState(null)
    return <>
        <Select items={itemsArray}
                onChange={setValue}
                value={value}/>
    </>
}

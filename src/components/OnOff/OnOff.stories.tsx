import {OnOff, ValueType} from "./OnOff";
import {action} from "@storybook/addon-actions";
import {useState} from "react";


export default {
    component: OnOff
}

const setAction = action("Button is clicked")

export const On = () => {
  return <OnOff value={"on"} setOnOff={setAction}/>
}

export const Off = () => {
    return <OnOff value={"off"} setOnOff={setAction}/>
}

export const ChangeOnOff = () => {
    const [value, setValue] = useState<ValueType>("off")
  return <OnOff value={value} setOnOff={setValue}/>
}

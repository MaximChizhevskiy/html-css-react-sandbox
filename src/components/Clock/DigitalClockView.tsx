import * as React from "react";
import {type ClockViewPropsType} from "./Clock";

export const get2DigitsStrings = (num: number) => num < 10 ? "0" + num : num
export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return <><span>{get2DigitsStrings(date.getHours())}</span>
        :
        <span>{get2DigitsStrings(date.getMinutes())}</span>
        :
        <span>{get2DigitsStrings(date.getSeconds())}</span>
    </>
}
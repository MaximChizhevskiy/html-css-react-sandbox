import * as React from "react";
import {useEffect, useState} from "react";

export type ClockPropsType = {

}

export const Clock: React.FC<ClockPropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => clearInterval(intervalId)
    }, []);

    const get2DigitsStrings = (num: number) => num < 0 ? "0" + num : num

    return (
        <div>
            <span>{date.getHours()}</span>
            :
            <span>{date.getMinutes()}</span>
            :
            <span>{date.getSeconds()}</span>
        </div>
    );
};
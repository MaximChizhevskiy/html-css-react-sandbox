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

    const get2DigitsStrings = (num: number) => num < 10 ? "0" + num : num

    return (
        <div>
            <span>{get2DigitsStrings(date.getHours())}</span>
            :
            <span>{get2DigitsStrings(date.getMinutes())}</span>
            :
            <span>{get2DigitsStrings(date.getSeconds())}</span>
        </div>
    );
};
import * as React from "react";
import {useEffect, useState} from "react";
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";

export type ClockPropsType = {
    mode: 'analog' | 'digital'
}

export const Clock: React.FC<ClockPropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => clearInterval(intervalId)
    }, []);

    let view
    switch (props.mode) {
        case "analog":
         view = <AnalogClockView date={date}/>
            break
        case "digital":
        default:
            view = <DigitalClockView date={date}/>
    }
    return (
        <div>
            {view}
        </div>
    );
};

export type ClockViewPropsType = {
    date: Date
}



import React, {useState} from 'react';

export function UncontrolledOnOff({defaultOn, onChange}: UncontrolledOnOffPropsType) {
    defaultOn = defaultOn ? defaultOn : false
    let [on, setOn] = useState(defaultOn)

    const onButtonStyle = {
        border: "1px solid black",
        width: "100px",
        height: "25px",
        backgroundColor: on ? "green" : "white",
        display: "inline-block"
    }
    const offButtonStyle = {
        border: "1px solid black",
        width: "100px",
        height: "25px",
        backgroundColor: !on ? "red" : "white",
        display: "inline-block",
        marginLeft: "10px"
    }
    const lightBulb = {
        width: "26px",
        height: "26px",
        borderRadius: "13px",
        display: "inline-block",
        backgroundColor: on ? "green" : "red",
        marginLeft: "10px"
    }

    return (
        <div>
            <div style={onButtonStyle}
                 onClick={() => {
                     setOn(on = true)
                     onChange?.(on)
                 }}>ON
            </div>
            <div style={offButtonStyle}
                 onClick={() => {
                     setOn(on = false)
                     onChange?.(on)
                 }}>OFF
            </div>
            <div style={lightBulb}></div>
        </div>
    );
}

type UncontrolledOnOffPropsType = {
    defaultOn?: boolean
    onChange?: (on: boolean) => void
}
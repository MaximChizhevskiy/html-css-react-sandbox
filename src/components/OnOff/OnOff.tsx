import React from 'react';

export function OnOff(props: OnOffPropsType) {

    const onButtonStyle = {
        border: "1px solid black",
        width: "100px",
        height: "25px",
        backgroundColor: props.value === "on" ? "green" : "white",
        display: "inline-block"
    }
    const offButtonStyle = {
        border: "1px solid black",
        width: "100px",
        height: "25px",
        backgroundColor: props.value === "off" ? "red" : "white",
        display: "inline-block",
        marginLeft: "10px"
    }
    const lightBulb = {
        width: "26px",
        height: "26px",
        borderRadius: "13px",
        display: "inline-block",
        backgroundColor: props.value === "on" ? "green" : "red",
        marginLeft: "10px"
    }

    const setOn = () => {
        props.setOnOff("on")
    }
    const setOff = () => {
        props.setOnOff("off")
    }
    return (
        <div>
            <div style={onButtonStyle}
                 onClick={setOn}>ON</div>
            <div style={offButtonStyle}
                 onClick={setOff}>OFF</div>
            <div style={lightBulb}></div>
        </div>
    );
}

export type ValueType = "on" | "off"

type OnOffPropsType = {
    value: ValueType
    setOnOff: (value: ValueType) => void
}

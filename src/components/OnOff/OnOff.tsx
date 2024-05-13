import React, {useState} from 'react';

function UncontrolledOnOff() {
    let [on, setOn] = useState(false)

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
            }}>ON</div>
            <div style={offButtonStyle}
                 onClick={() => {
                setOn(on = false)
            }}>OFF</div>
            <div style={lightBulb}></div>
        </div>
    );
}

/*type OnOffPropsType = {
    value: boolean
}*/

export default UncontrolledOnOff;
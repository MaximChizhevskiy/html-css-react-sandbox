import {useState} from "react";

function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    console.log("UncontrolledAccordion rendered")

    let [collapsed, setCollapsed] = useState(false)
    return (
        <div>
            <UncontrolledAccordionTitle title={props.titleValue}
            onClick = {() => {setCollapsed(!collapsed)}}/>
            {/*<button onClick={() => {setCollapsed(!collapsed)}}>Toggle</button>*/}
            {!collapsed &&<UncontrolledAccordionBody itemOne={props.itemOneValue}
                                               itemTwo={props.itemTwoValue}
                                               itemThree={props.itemThreeValue}
            />}
        </div>
    )
}

function UncontrolledAccordionTitle(props: UncontrolledAccordionTitlePropsType) {
    console.log("UncontrolledAccordionTitle rendered")
    return (
        <h3 onClick={() => {props.onClick()}}
            style={{cursor: "pointer"}}>{props.title}</h3>
    )
}

function UncontrolledAccordionBody(props: UncontrolledAccordionBodyPropsType) {
    console.log("AccordionBody rendered")
    return (
        <ul>
            <li>{props.itemOne}</li>
            <li>{props.itemTwo}</li>
            <li>{props.itemThree}</li>
        </ul>
    )
}

//===================================
type UncontrolledAccordionTitlePropsType = {
    title: string
    onClick: () => void
}

type UncontrolledAccordionBodyPropsType = {
    itemOne: string
    itemTwo: string
    itemThree: string
}

type UncontrolledAccordionPropsType = {
    titleValue: string
    //collapsed: boolean
    itemOneValue: string
    itemTwoValue: string
    itemThreeValue: string
}

export default UncontrolledAccordion
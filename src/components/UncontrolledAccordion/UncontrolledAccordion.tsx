import {useReducer} from "react";
import {reducer} from "./reducer";


export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    console.log("UncontrolledAccordion rendered")
    //let [collapsed, setCollapsed] = useState(collaplseCondition)
    const [state, dispatch] = useReducer(reducer, {collapsed:false})
    return (
        <div>
            {/*<UncontrolledAccordionTitle title={props.titleValue}
                                        onClick={() => {
                                            setCollapsed(!collapsed)
                                            props.onChange?.()
                                        }}/>*/}
            <UncontrolledAccordionTitle title={props.titleValue}
                                        onClick={() => {dispatch({type: 'TOGGLE-COLLAPSED'})
                                        props.onChange?.()}}/>
            {!state.collapsed && <UncontrolledAccordionBody itemOne={props.itemOneValue}
                                                      itemTwo={props.itemTwoValue}
                                                      itemThree={props.itemThreeValue}/>}
        </div>
    )
}

function UncontrolledAccordionTitle(props: UncontrolledAccordionTitlePropsType) {
    console.log("UncontrolledAccordionTitle rendered")
    return (
        <h3 onClick={() => {
            props.onClick()
        }}
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
    itemOneValue: string
    itemTwoValue: string
    itemThreeValue: string
    collapsed?: boolean
    onChange?: () => void
}

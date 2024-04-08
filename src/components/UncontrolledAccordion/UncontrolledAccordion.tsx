function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendered")
    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            {!props.collapsed &&<AccordionBody itemOne={props.itemOneValue}
                                               itemTwo={props.itemTwoValue}
                                               itemThree={props.itemThreeValue}
            />}
        </div>
    )
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendered")
    return (
        <h3>{props.title}</h3>
    )
}

function AccordionBody(props: AccordionBodyPropsType) {
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
type AccordionTitlePropsType = {
    title: string
}

type AccordionBodyPropsType = {
    itemOne: string
    itemTwo: string
    itemThree: string
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    itemOneValue: string
    itemTwoValue: string
    itemThreeValue: string
}

export default Accordion
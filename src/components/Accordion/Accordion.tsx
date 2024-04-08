function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendered")
    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            setAccordionCollapsed={props.setAccordionCollapsed}
                            collapsed={props.collapsed}/>
            {!props.collapsed &&<AccordionBody itemOne={props.itemOneValue}
                                               itemTwo={props.itemTwoValue}
                                               itemThree={props.itemThreeValue}
            />}
        </div>
    )
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendered")
    const setAccordionCollapsed = () => {
        props.setAccordionCollapsed(!props.collapsed)
    }
    return (
        <h3 onClick={setAccordionCollapsed}>{props.title}</h3>
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
    setAccordionCollapsed: (collapsed: boolean) => void
    collapsed: boolean
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
    setAccordionCollapsed: (collapsed: boolean) => void
}

export default Accordion
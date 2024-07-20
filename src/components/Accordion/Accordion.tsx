export function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendered")
    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            setAccordionCollapsed={props.setAccordionCollapsed}
                            collapsed={props.collapsed}/>
            {!props.collapsed &&<AccordionBody items={props.items} onClick={props.onClick}
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
             {props.items.map((i, index) => {
                 return <li key={index} onClick={() => props.onClick(i.value)}>{i.title}</li>
             })}
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
     items: ItemType[]
     onClick: (value: any) => void
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    items: ItemType[]
    setAccordionCollapsed: (collapsed: boolean) => void
    onClick: (value: any) => void
}

type ItemType = {
    title: string
    value: any
}
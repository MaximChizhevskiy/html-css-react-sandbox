import {action} from '@storybook/addon-actions'
import {Accordion} from './Accordion';
import {useState} from "react";

/*const meta = {
    title: 'Accordion',
    component: Accordion,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {setAccordionCollapsed: fn()},
} satisfies Meta<typeof Accordion>;

export default meta;
type StoryAccordion = StoryObj<typeof meta>;*/

/*
export const CollapsedTrue: StoryAccordion = {
    args: {
        titleValue: "Menu",
        collapsed: true,
        itemOneValue: "1",
        itemTwoValue: "2",
        itemThreeValue: "3",
        setAccordionCollapsed: fn()
    },
};
*/

/*export const CollapsedFalse: StoryAccordion = {
    args: {
        titleValue: "Menu",
        collapsed: false,
        itemOneValue: "1",
        itemTwoValue: "2",
        itemThreeValue: "3",
        setAccordionCollapsed: fn()
    },
};*/

export default {
    component: Accordion
}

const setAccordionCollapsed = action('collapse is changed')
const onItemClick = action(`item was clicked`)

export const CollapsedTrue = () => {
    return <Accordion titleValue={"List of Items"}
                      collapsed={true}
                      items={[]}
                      onClick={onItemClick}
                      setAccordionCollapsed={setAccordionCollapsed}/>
}

export const CollapsedFalse = () => {
    return <Accordion titleValue={"List of Items"}
                      collapsed={false}
                      items={[{title: "Max", value: 1},
                          {title: "Daulet", value: 2},
                          {title: "Dauren", value: 3},
                          {title: "Sharov", value: 4}]}
                      onClick={onItemClick}
                      setAccordionCollapsed={setAccordionCollapsed}/>
}

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(false)
    return <Accordion titleValue={"List of Items"}
                      collapsed={value}
                      items={[{title: "Max", value: 1},
                          {title: "Daulet", value: 2},
                          {title: "Dauren", value: 3},
                          {title: "Sharov", value: 4}]}
                      onClick={onItemClick}
                      setAccordionCollapsed={() => setValue(!value)}/>
}


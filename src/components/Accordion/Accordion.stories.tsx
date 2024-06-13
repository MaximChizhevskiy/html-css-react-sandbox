import {action} from '@storybook/addon-actions'
import {Accordion} from './Accordion';

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
    component:Accordion
}

const setAccordionCollapsed = action('collapse is changed')

export const CollapsedTrue = () => {
    return <Accordion titleValue={"List of Items"}
                      collapsed={true}
                      itemOneValue={"itemOne"}
                      itemTwoValue={"itemTwo"}
                      itemThreeValue={"itemThree"}
                      setAccordionCollapsed={setAccordionCollapsed}/>
}

export const CollapsedFalse = () => {
    return <Accordion titleValue={"List of Items"}
                      collapsed={false}
                      itemOneValue={"itemOne"}
                      itemTwoValue={"itemTwo"}
                      itemThreeValue={"itemThree"}
                      setAccordionCollapsed={setAccordionCollapsed}/>
}


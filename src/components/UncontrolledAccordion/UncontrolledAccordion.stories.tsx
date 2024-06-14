import {UncontrolledAccordion} from "./UncontrolledAccordion";
import {action} from "@storybook/addon-actions";

export default {
    component: UncontrolledAccordion
}

const callback = action("Collapse status is changed")

export const AccordionMenuCollapsedMode = () => {
    return <UncontrolledAccordion collapsed={true}
                                  titleValue={"Title Menu"}
                                  itemOneValue={"Item_1"}
                                  itemTwoValue={"Item_2"}
                                  itemThreeValue={"Item_3"}/>
}

export const AccordionMenuUncollapsedMode = () => {
    return <UncontrolledAccordion collapsed={false}
                                  titleValue={"Title Menu"}
                                  itemOneValue={"Item_1"}
                                  itemTwoValue={"Item_2"}
                                  itemThreeValue={"Item_3"}/>
}

export const SelfContainedAccordion = () => {
    return <UncontrolledAccordion titleValue={"Title Menu"}
                                  itemOneValue={"Item_1"}
                                  itemTwoValue={"Item_2"}
                                  itemThreeValue={"Item_3"}
                                  onChange={callback}/>
}


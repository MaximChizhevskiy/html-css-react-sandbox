import {UncontrolledAccordion} from "./UncontrolledAccordion";

export default {
    component: UncontrolledAccordion
}

export const SelfContainedAccordion = () => {
    return <UncontrolledAccordion titleValue={"Title Menu"}
                                  itemOneValue={"Item_1"}
                                  itemTwoValue={"Item_2"}
                                  itemThreeValue={"Item_3"}/>
}
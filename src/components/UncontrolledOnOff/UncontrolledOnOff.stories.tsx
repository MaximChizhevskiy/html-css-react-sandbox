import {UncontrolledOnOff} from "./UncontrolledOnOff";
import {action} from "@storybook/addon-actions";

export default {
    component: UncontrolledOnOff
}

const callback = action("On or Off is clicked")

export const OnMode = () => {
    return <UncontrolledOnOff defaultOn={true}
                              onChange={callback}/>
}

export const OffMode = () => {
    return <UncontrolledOnOff defaultOn={false}
                              onChange={callback}/>
}


export const SelfContainedOnOff = () => {
    return <UncontrolledOnOff/>
}

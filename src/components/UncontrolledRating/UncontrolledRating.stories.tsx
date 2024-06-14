import {UncontrolledRating} from "./UncontrolledRating";
import {action} from "@storybook/addon-actions";

export default {
    component:UncontrolledRating
}

const callback = action("Rating is changed")

export const emptyRating = () => {
    return <UncontrolledRating defaultValue={0}/>
}

export const oneStar = () => {
    return <UncontrolledRating defaultValue={1}/>
}

export const twoStar = () => {
    return <UncontrolledRating defaultValue={2}/>
}

export const threeStar = () => {
    return <UncontrolledRating defaultValue={3}/>
}

export const fourStar = () => {
    return <UncontrolledRating defaultValue={4}/>
}

export const fiveStar = () => {
    return <UncontrolledRating defaultValue={5}/>
}

export const SelfContainedRating = () => {
    return <UncontrolledRating onChange={callback}/>
}

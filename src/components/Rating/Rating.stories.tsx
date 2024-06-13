import {action} from '@storybook/addon-actions'
import {Rating, RatingValueType} from './Rating';
import {useState} from "react";

export default {
    component:Rating
}

const setRating = action('click on star')

export const EmptyStars = () => {
    return <Rating value={0} onClick={setRating} />
}

export const OneStar = () => {
    return <Rating value={1} onClick={setRating} />
}

export const TwoStars = () => {
    return <Rating value={2} onClick={setRating} />
}

export const ThreeStars = () => {
    return <Rating value={3} onClick={setRating} />
}

export const FourStars = () => {
    return <Rating value={4} onClick={setRating} />
}

export const FiveStars = () => {
    return <Rating value={5} onClick={setRating} />
}

export const ChangeRaiting = () => {
    const [value, setValue]=useState<RatingValueType>(4)
    /*const onClickHandler = () => {
      setValue(value)
    }*/
    return <Rating value={value} onClick={setValue}/>
}

/*
export function Rating(props: RatingPropsType) {

    return (
        <div>
            <Star selected={props.value > 0} onClick={props.onClick} value={1}/>
            <Star selected={props.value > 1} onClick={props.onClick} value={2}/>
            <Star selected={props.value > 2} onClick={props.onClick} value={3}/>
            <Star selected={props.value > 3} onClick={props.onClick} value={4}/>
            <Star selected={props.value > 4} onClick={props.onClick} value={5}/>
        </div>
    )}
*/

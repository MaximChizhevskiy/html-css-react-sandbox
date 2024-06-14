import {useState} from "react";

export function UncontrolledRating({defaultValue, onChange} : UncontrolledRatingPropsType) {
    console.log("UncontrolledRating rendered")
    defaultValue = defaultValue ? defaultValue : 0
    const [value, setValue] = useState<RatingValueType>(defaultValue)
    return (
     <div>
        <Star selected={value > 0} setValue={() => {setValue(1); onChange?.(1)}}/>
        <Star selected={value > 1} setValue={() => {setValue(2); onChange?.(2)}}/>
        <Star selected={value > 2} setValue={() => {setValue(3); onChange?.(3)}}/>
        <Star selected={value > 3} setValue={() => {setValue(4); onChange?.(4)}}/>
        <Star selected={value > 4} setValue={() => {setValue(5); onChange?.(5)}}/>
    </div>
)}

function Star(props: StarPropsType) {
    console.log("Star rendered")

    const setValue = () => {
      props.setValue()
    }
    return (
        <span onClick={setValue}
        style={{cursor: "pointer"}}>
            {props.selected ? <>⭐</> : <>★</>}
        </span>
    )
}

//=================================
type StarPropsType = {
    selected: boolean
    setValue: () => void
    onChange?: (value: RatingValueType) => void
    //value: 1 | 2 | 3 | 4 | 5
}

type RatingValueType =  0 | 1 | 2 | 3 | 4 | 5

type UncontrolledRatingPropsType = {
    defaultValue?: RatingValueType
    onChange?: (value: RatingValueType) => void
}

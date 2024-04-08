import {useState} from "react";

function UncontrolledRating() {
    console.log("UncontrolledRating rendered")
    const [value, setValue] = useState(0)
    return (
     <div>
        <Star selected={value > 0} setValue={() => setValue(1)}/>
        <Star selected={value > 1} setValue={() => setValue(2)}/>
        <Star selected={value > 2} setValue={() => setValue(3)}/>
        <Star selected={value > 3} setValue={() => setValue(4)}/>
        <Star selected={value > 4} setValue={() => setValue(5)}/>
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
    //value: 1 | 2 | 3 | 4 | 5
}

type RatingPropsType = {
    value: number
}


export default UncontrolledRating
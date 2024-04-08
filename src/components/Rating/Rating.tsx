function Rating(props: RatingPropsType) {
    console.log("Rating rendered")
    return (
     <div>
        <Star selected={props.value > 0} onClick={props.onClick} value={1}/>
        <Star selected={props.value > 1} onClick={props.onClick} value={2}/>
        <Star selected={props.value > 2} onClick={props.onClick} value={3}/>
        <Star selected={props.value > 3} onClick={props.onClick} value={4}/>
        <Star selected={props.value > 4} onClick={props.onClick} value={5}/>
    </div>
)}

function Star(props: StarPropsType) {
    console.log("Star rendered")
    const onClickHandler = () => {
        props.onClick(props.value)
    }
    return (
        <span style={{cursor: "pointer"}}
            onClick={onClickHandler}>{(props.selected) ? <>⭐</> : <>★</>}</span>
    )
}

//=================================
type StarPropsType = {
    selected: boolean
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

type RatingPropsType = {
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

export default Rating
import s from './Select.module.css'
import {useState, KeyboardEvent, useEffect} from "react";

export function Select(props: SelectPropsType) {
    /*const itemsArray: ItemType[] = [
        {value: "1", title: "Astana"},
        {value: "2", title: "Moscow"},
        {value: "3", title: "Minsk"},
        { value: "4", title: "Ukraine"}
    ]*/

    const [active, setActive] = useState<boolean>(false)
    const [hoveredItemValue, setHoveredItemValue] = useState<any>(props.value)
    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredItemValue)
    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }
    useEffect(() => {
        setHoveredItemValue(props.value)
    }, [props.value]);
    const onKeyUpHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        //console.log("press")
        if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredItemValue) {
                    const pretendentElement = event.key === "ArrowDown"
                        ? props.items[i + 1]
                        : props.items[i - 1]

                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return
                    }
                }
            }
            if (!selectedItem){
                props.onChange(props.items[0].value)
            }
        }
        if (event.key === "Escape" || event.key === "Enter") {
            setActive(false)
        }
    }
    return (
        <>
            <div className={s.select}
                 onKeyUp={onKeyUpHandler}
                 tabIndex={0}>
                <span className={s.selectMain}
                      onClick={toggleItems}>
                    {selectedItem && selectedItem.title}</span>
                {active &&
                    <div className={s.items}>
                        {props.items.map(i => <div key={i.value}
                                                   className={s.item + " " + (hoveredItem === i ? s.selected : "")}
                                                   onClick={() => onItemClick(i.value)}
                                                   onMouseEnter={() => setHoveredItemValue(i.value)}>{i.title}
                            </div>
                        )}
                    </div>
                }

            </div>
        </>
    )
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

type ItemType = {
    title: string
    value: any
}
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {useState} from "react";
import {OnOff, ValueType} from "./components/OnOff/OnOff";

function App() {
    console.log("App rendered")
    const [ratingValue, setRatingValue] = useState<RatingValueType>(3)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [onOff, setOnOff] = useState<ValueType>("off")
    return (
        <div className="App">
            <AppTitle/>
            <Rating value={ratingValue}
                    onClick={setRatingValue}/>
            <UncontrolledRating/>
            <Accordion titleValue={"MyMenu"}
                       setAccordionCollapsed={setAccordionCollapsed}
                       collapsed={accordionCollapsed}
                       itemOneValue={"Item1"}
                       itemTwoValue={"Item2"}
                       itemThreeValue={"Item3"}
            />
            <UncontrolledAccordion titleValue={"Users"}
                                   itemOneValue={"Микки"}
                                   itemTwoValue={"Дональд"}
                                   itemThreeValue={"Скрудж"}
            />
            <UncontrolledOnOff />
            <OnOff value={onOff}
                   setOnOff={setOnOff}/>
        </div>
    );
}

function AppTitle() {
    console.log("AppTitle rendered")
    return (
        <>
            Welcome to IT-INCUBATOR
        </>
    );
}

export default App;
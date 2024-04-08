import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating, {RatingValueType} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";
import {useState} from "react";

function App() {
    console.log("App rendered")
    const [ratingValue, setRatingValue] = useState<RatingValueType>(3)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    return (
        <div className="App">
            <AppTitle/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion titleValue={"MyMenu"}
                       setAccordionCollapsed={setAccordionCollapsed}
                       collapsed={accordionCollapsed}
                       itemOneValue={"Item1"}
                       itemTwoValue={"Item2"}
                       itemThreeValue={"Item3"} />

            {/*<UncontrolledAccordion titleValue={"Menu"}
                                   itemOneValue={"Item1"}
                                   itemTwoValue={"Item2"}
                                   itemThreeValue={"Item3"}
            />
            <UncontrolledAccordion titleValue={"Users"}
                                   itemOneValue={"Микки"}
                                   itemTwoValue={"Дональд"}
                                   itemThreeValue={"Скрудж"}
            />
            <UncontrolledRating/>
            <OnOff />
            <OnOff />*/}
            <UncontrolledRating/>
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
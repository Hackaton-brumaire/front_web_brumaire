import React from "react"
import FaqAccoordion from "../component/faq/FaqAccoordion"
import Client from "../component/faq/Client";

const Faq = () => {
    let items = [{question: "bonjour1", response: "cava1"}, {question: "bonjour2", response: "cava2"}]
    return (
        <div className="faq--view">
            <h3> Frequanetly Asked Question (FAQ) </h3>
            <div className="Content-view">
                <div className="faq-accordion">
                    < FaqAccoordion items={items} />
                </div>
                <div >
                    <Client />
                </ div>           
            </div>
        </div>      
    )
}

export default Faq



   
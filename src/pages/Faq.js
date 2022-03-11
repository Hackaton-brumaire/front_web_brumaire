import React from "react"
import '../sass/Pages/Faq.css';
import FaqAccoordion from "../componentes/faq/FaqAccoordion"
import Client from "../componentes/faq/Client";

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



   
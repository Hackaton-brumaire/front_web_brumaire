import React from "react"
import FaqAccoordion from "../component/faq/FaqAccoordion"
import Client from "../component/faq/Client";

const Faq = () => {
    let items = [{question: "Mon scooter ne démarre plus ?", response: " Branche la batterie"},
        {question: "J'ai un problème avec la batterie, la batterie ne recharge plus ? ",
            response: "Pour commerncer verifier que vous avez correctement brancher la batterie, ci cela ne fonctionne pas conctacter le SAV (ou paye)"},
        {question: "comment recharger mon scooter ?", response:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac odio accumsan, tincidunt ex in, blandit metus. Aenean erat nulla, faucibus in pharetra congue, interdum vel lectus. Praesent lacus nunc, posuere id nisi eget, euismod rutrum odio. Mauris fringilla, mi et tristique mattis, libero mauris laoreet nisl, vitae vulputate eros. "},
        {question: "comment recharger mon scooter ?", response:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac odio accumsan, tincidunt ex in, blandit metus. Aenean erat nulla, faucibus in pharetra congue, interdum vel lectus. Praesent lacus nunc, posuere id nisi eget, euismod rutrum odio. Mauris fringilla, mi et tristique mattis, libero mauris laoreet nisl, vitae vulputate eros. "},
        {question: "comment recharger mon scooter ?", response:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac odio accumsan, tincidunt ex in, blandit metus. Aenean erat nulla, faucibus in pharetra congue, interdum vel lectus. Praesent lacus nunc, posuere id nisi eget, euismod rutrum odio. Mauris fringilla, mi et tristique mattis, libero mauris laoreet nisl, vitae vulputate eros. "},
        {question: "comment recharger mon scooter ?", response:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac odio accumsan, tincidunt ex in, blandit metus. Aenean erat nulla, faucibus in pharetra congue, interdum vel lectus. Praesent lacus nunc, posuere id nisi eget, euismod rutrum odio. Mauris fringilla, mi et tristique mattis, libero mauris laoreet nisl, vitae vulputate eros. "},
        {question: "comment recharger mon scooter ?", response:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac odio accumsan, tincidunt ex in, blandit metus. Aenean erat nulla, faucibus in pharetra congue, interdum vel lectus. Praesent lacus nunc, posuere id nisi eget, euismod rutrum odio. Mauris fringilla, mi et tristique mattis, libero mauris laoreet nisl, vitae vulputate eros. "}]
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




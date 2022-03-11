import React from 'react';

import AccordionRow from './AccordionRow';
import '../../sass/Pages/Faq.css';

export default function FaqAccoordion(props) {
    const items = props.items
    const renderItems = items.map(elt => (<AccordionRow item={elt} />))
    
  return <div>
    {renderItems}
  </div>
    
  
}





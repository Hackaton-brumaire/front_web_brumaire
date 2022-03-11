import React from 'react';

import AccordionRow from './AccordionRow';

export default function FaqAccoordion(props) {
    const items = props.items
    const renderItems = items.map(elt => (<AccordionRow item={elt} />))
    
  return <div>
    {renderItems}
  </div>
    
  
}





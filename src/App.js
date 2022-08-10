import React, { useState } from 'react';
import './App.css';
import { accordionData } from './utils/content';

const AccordionItem = ({title,content})=>{
  const [isActive, setIsActive] = useState(false);

  return(
    <div className="accordion-item">
      <div className="accordion-title"
        onClick={()=>setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive? "-":"+"}</div>
      </div>

      { isActive && <div className="accordion-content">{content}</div>}
    
    </div>
  );
}


const App = () => {
  return (
    <React.Fragment>
      <h1>React Accordion Demo</h1>
      <div className="accordion">

        {
          accordionData.map((item)=>{
            return <AccordionItem title={item.title} content={item.content} key={item.title}/>
          })
        }
        
      </div>
    </React.Fragment>
  );
};

export default App;

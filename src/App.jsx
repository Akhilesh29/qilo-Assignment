import React, { useState } from 'react';
import Topbar from './components/TOPBAR/Topbar';
import Element from './components/ELEMENT/Element';
import './style.css';

function App() {
  const [elements, setElements] = useState([{ id: 0, component: <Element /> }]);

  const addElement = () => {
    const newElement = { id: elements.length, component: <Element /> };
    setElements([...elements, newElement]);
  };

  const removeElement = (id) => {
    setElements(elements.filter(element => element.id !== id));
  };

  return (
    <>
      <Topbar />
      <div className='canvas' style={{ margin: '10px', padding: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', border: '1px solid black', backgroundColor: 'rgba(120,131,155,.2)', borderRadius: '10px' }}>

        <button onClick={addElement}>add</button>

        <div className='elems' >
          {elements.map((element, index) => (
            <div key={element.id} style={{ display: 'flex', alignItems: 'center', margin: '10px' }}>
              {element.component}
              <button onClick={() => removeElement(element.id)}>delete</button>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}

export default App;

import React from 'react';
import Accordion from './components/Accordion';

const items = [
  {
    title: 'The Matrix',
    year: '1999'
  },
  {
    title: 'Mad Max',
    year: '1979'
  }
]

const App = () => {
  return <div><Accordion items={items}/></div>
};

export default App;
import './App.css';
import Header from '../Header/Header';
import Item from '../Item/Item';

import { useState } from 'react';

const arr = [
  'шашлык', "колбаса", "томатный сок", "хватит", "ДОСТАЛ", "черт возьми"
]

function App() {
  const [isActive, setIsActive] = useState(true);

  const handleClick = () => {
    setIsActive(!isActive)
  }

  console.log(isActive)

  return (
    <div className="app">
      <Header headerTitle={"carsики"} id={1} height={177}/>
      
      <button onClick={handleClick}>change</button>

      {
        isActive 
          ? arr.map((eda, index) => {
              return (
                <Item key={index} name={eda}/>
              )
            })
          : <Item name={arr[4]}/>
      }

    </div>
  );
}

export default App;







































// {
//   arr.map((eda, index) => {
//     return (
//       <Item key={index} index={index} name={eda}/>
//     )
//   })
// }
import './App.css';
import Header from '../MainPage/Sections/Nav/Nav';
import { Routes, Route } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';
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
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/some-path" element={<Header headerTitle={"какой-то путь"}/>} />
        <Route path="*" element={<Header headerTitle={"страница не найдена"}/>} />
      </Routes>
      

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
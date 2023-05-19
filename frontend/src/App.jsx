import { useEffect, useState } from "react";
import style from "./App.module.css";
import Posts from "./components/Posts/Posts";
import Search from './components/Search/Search';
import Favorites from "./components/Favorites/Favorites";

function App() {

  const [searchTerm, setSearchTerm] = useState('');
  const [isActive, setisActive] = useState(false);

  return (
    <div className={style.container}>
      <Favorites setisActive={setisActive} isActive={isActive}/>
      <Search setSearchTerm={setSearchTerm} />
      <Posts isActive={isActive} searchTerm={searchTerm}/>
    </div>
  );
}

export default App;
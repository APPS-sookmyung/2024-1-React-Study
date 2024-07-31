import { React, useState } from "react";
import styles from "./ToDo.module.css";

import ToDoAdd from "./components/ToDoAdd";
import ToDoNav from "./components/ToDoNav";
import ToDoList from "./components/ToDoList";

export default function ToDo() {
  const [menu, setMenu] = useState("All");
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={styles.frame}>
      <div className={styles.ToDoFrame}>
        <ToDoNav
          setNavState={setMenu}
          setDarkMode={setDarkMode}
          darkMode={darkMode}
        />
        <ToDoList navState={menu} darkMode={darkMode} />
        <ToDoAdd darkMode={darkMode} />
      </div>
    </div>
  );
}

import { React, useState, useRef } from "react";
import styles from "./ToDoAdd.module.css";

export default function ToDoAdd({ darkMode }) {
  const [inputVal, setInputVal] = useState();
  const inputRef = useRef();
  return (
    <div
      className={
        styles["AddFrame"] + " " + styles[!darkMode ? "whiteMode" : ""]
      }
    >
      <input
        type="text"
        className={styles.input}
        placeholder="Add Todo"
        ref={inputRef}
        spellcheck="false"
        onChange={(e) => {
          setInputVal(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            localStorage.setItem(inputVal, "Active");
            window.dispatchEvent(new Event("storage"));
            e.target.value = "";
          }
        }}
      />
      <button
        className={styles.button}
        onClick={(e) => {
          e.preventDefault();
          localStorage.setItem(inputVal, "Active");
          window.dispatchEvent(new Event("storage"));
          inputRef.current.value = "";
        }}
      >
        Add
      </button>
    </div>
  );
}

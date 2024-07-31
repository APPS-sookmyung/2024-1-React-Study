import { React, useState } from "react";
import styles from "./ToDoList.module.css";
import trashcan from "../assets/icons/trashcan.svg";

export default function ToDoList({ navState, darkMode }) {
  const [items, setItems] = useState({ ...localStorage });
  window.addEventListener("storage", () => {
    setItems({ ...localStorage });
  });
  function changeToDoState(toDoName, currentState) {
    if (currentState === "Active") localStorage.setItem(toDoName, "Completed");
    else localStorage.setItem(toDoName, "Active");
    window.dispatchEvent(new Event("storage"));
  }
  function eraseToDo(toDoName) {
    localStorage.removeItem(toDoName);
    window.dispatchEvent(new Event("storage"));
  }
  function createListFrame(item, index) {
    return (
      <div
        className={
          styles["listedItems"] + " " + styles[!darkMode ? "whiteModeFont" : ""]
        }
      >
        <div>
          <input
            type="checkbox"
            id={index}
            onClick={(e) => {
              changeToDoState(item[0], item[1]);
            }}
            checked={item[1] === "Completed" ? "true" : ""}
          />
          <label
            htmlFor={index}
            className={styles["label"] + " " + styles[item[1]]}
          >
            {item[0]}
          </label>
        </div>
        <img
          src={trashcan}
          className={styles.trashcan}
          onClick={() => {
            eraseToDo(item[0]);
          }}
        />
      </div>
    );
  }

  return (
    <div
      className={
        styles["toDoListFrame"] + " " + styles[!darkMode ? "whiteMode" : ""]
      }
    >
      {Object.entries(items).map((item, index) => {
        if (navState === "All") {
          return createListFrame(item, index);
        } else {
          if (navState === item[1]) {
            return createListFrame(item, index);
          }
        }
      })}
    </div>
  );
}

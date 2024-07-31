import { React, useState } from "react";
import styles from "./ToDoNav.module.css";
import darkModeIcon from "../assets/icons/darkMode.svg";

export default function ToDoNav({ setNavState, setDarkMode, darkMode }) {
  const [navSelect, setNavSelect] = useState("All");
  return (
    <div
      className={
        styles["navFrame"] + " " + styles[!darkMode ? "whiteMode" : ""]
      }
    >
      <img
        src={darkModeIcon}
        className={styles.darkModeIcon}
        onClick={() => {
          setDarkMode((prev) => !prev);
          console.log(darkMode);
        }}
      />
      <div>
        <input
          type="radio"
          id="All"
          name="menu"
          value="All"
          className={styles.radio}
          onClick={(e) => {
            setNavSelect(e.target.id);
            setNavState(e.target.id);
          }}
        />
        <label
          htmlFor="All"
          className={
            navSelect === "All"
              ? styles["selectedInput"]
              : styles["notSelectedInput"]
          }
        >
          All
        </label>
        <input
          type="radio"
          id="Active"
          name="menu"
          value="Active"
          className={styles.radio}
          onClick={(e) => {
            setNavSelect(e.target.id);
            setNavState(e.target.id);
          }}
        />
        <label
          htmlFor="Active"
          className={
            navSelect === "Active"
              ? styles["selectedInput"]
              : styles["notSelectedInput"]
          }
        >
          Active
        </label>
        <input
          type="radio"
          id="Completed"
          name="menu"
          value="Completed"
          className={styles.radio}
          onClick={(e) => {
            setNavSelect(e.target.id);
            setNavState(e.target.id);
          }}
        />
        <label
          htmlFor="Completed"
          className={
            navSelect === "Completed"
              ? styles["selectedInput"]
              : styles["notSelectedInput"]
          }
        >
          Completed
        </label>
      </div>
    </div>
  );
}

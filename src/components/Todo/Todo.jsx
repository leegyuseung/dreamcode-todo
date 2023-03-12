import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import styles from "./Todo.module.css";

export default function Todo({ todo, onDelete, onUpdate }) {
  const { text, status } = todo;
  const handleChange = (e) => {
    onUpdate({ ...todo, status: e.target.checked ? "completed" : "active" });
  };
  const handleDelete = () => onDelete(todo);
  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id="checkbox"
        checked={status === "completed"}
        onChange={handleChange}
      />
      <label className={styles.text} htmlFor="checkbox">
        {text}
      </label>
      <span className={styles.icon}>
        <button className={styles.button} onClick={handleDelete}>
          <FaTrashAlt />
        </button>
      </span>
    </li>
  );
}

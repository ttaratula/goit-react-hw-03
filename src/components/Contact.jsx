import React from "react";
import css from './Contact.module.css';

export default function Contact({ name, number, onDelete }) {
  return (
    <div className={css.contactCard}>
      <div className={css.contactInfo}>
        <p className={css.icon}>👤 {name}</p>
        <p className={css.icon}>📞 {number}</p>
      </div>

      <button className={css.deleteButton} onClick={onDelete}>Delete</button>
    </div>
  );
}


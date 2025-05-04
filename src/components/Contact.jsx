import React from "react";
import css from "./Contact.module.css";

export default function Contact({ name, number,  onDelete  }) {
  return (
    <>
      <div>
        <p>👤 {name} </p>
        <p>📞 {number}</p>
      </div>

      <button onClick={onDelete}>Delete</button>
    </>
  );
}

import React from "react";
import css from './Contact.module.css';

import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contactsSlice';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.contactCard}>
      <div className={css.contactInfo}>
        <p className={css.icon}>👤 {name}</p>
        <p className={css.icon}>📞 {number}</p>
      </div>

      <button className={css.deleteButton} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

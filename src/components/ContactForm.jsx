import css from './ContactForm.module.css'
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../redux/contactsSlice';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Min 3 chars!')
    .max(50, 'Max 50 chars!')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Min 3 chars!')
    .max(50, 'Max 50 chars!')
    .required('Required'),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const handleSubmit = (values, { resetForm }) => {
    const duplicate = contacts.find(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );

    if (duplicate) {
      alert(`${values.name} is already in contacts.`);
      return;
    }

    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={contactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label}>
          Name:
          <Field className={css.field} name="name" />
          <ErrorMessage className={css.error} name="name" component="div" />
        </label>
        <br />
        <label className={css.label}>
          Number:
          <Field className={css.field} name="number" />
          <ErrorMessage className={css.error} name="number" component="div" />
        </label>
        <br />
        <button className={css.button} type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
}

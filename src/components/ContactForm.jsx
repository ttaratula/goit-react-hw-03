import css from './ContactForm.module.css'
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

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


export default function ContactForm({ onAdd }) {
    return (
    
        <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={contactSchema}
      onSubmit={(values, { resetForm }) => {
        onAdd(values.name, values.number);
        resetForm();
      }}
    >
      <Form className={css.form}>
        <label className={css.label}>
          Name:
          <Field className={css.field} name="name" />
          <ErrorMessage className={css.error}name="name" component="div" />
        </label>
        <br />
        <label className={css.label}>
          Number:
          <Field className={css.field} name="number" />
          <ErrorMessage className={css.error}name="number" component="div" />
        </label>
        <br />
        <button className={css.button} type="submit">Add Contact</button>
      </Form>
    </Formik>
    
    );
  }
  
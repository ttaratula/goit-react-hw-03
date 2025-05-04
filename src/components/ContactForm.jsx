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
      <Form>
        <label>
          Name:
          <Field name="name" />
          <ErrorMessage name="name" component="div" />
        </label>
        <br />
        <label>
          Number:
          <Field name="number" />
          <ErrorMessage name="number" component="div" />
        </label>
        <br />
        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
    
    );
  }
  
import React from 'react';
import {
  Formik,
  FormikErrors,
  Form,
  Field,
  ErrorMessage
} from 'formik';

import { Hospital } from '../types';
import Client from '../client/client';

export const HospitalForm = () => {
  const initialValues : Partial<Hospital> = {
    name: '',
    phoneNumber: '',
    website: '',
  };
  return (
    <Formik
      initialValues={initialValues}
      validate={values => {
        // Do nothing for now
        const errors : FormikErrors<{}> = {};
        return errors;
      }}
      onSubmit={(hospital, { setSubmitting }) => {
        const client  = new Client();
        client.addHospital(hospital)
        .catch((error) => console.log("Cannot submit hospital"))
        .then(() => setSubmitting(false));
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <label htmlFor={'name'}>Name</label>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" />
          <label htmlFor={'phoneNumber'}>Phone number</label>
          <Field type="text" name="phoneNumber" />
          <ErrorMessage name="phoneNumber" component="div" />
          <label htmlFor={'website'}>Website</label>
          <Field type="text" name="website" />
          <ErrorMessage name="website" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  )
};

export default HospitalForm;

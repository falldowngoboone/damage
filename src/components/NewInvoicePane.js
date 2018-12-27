import React from "react";
import { Formik, Field, FieldArray } from "formik";
import cx from "classnames";
import format from "date-fns/format";

import styles from "./NewInvoicePane.module.scss";

export default function NewInvoicePane({ onData = () => {} }) {
  const today = format(new Date(), "MMMM d, yyyy");

  return (
    <>
      <h1>New Invoice</h1>
      <Formik
        initialValues={{
          date: today,
          client: "",
          services: [],
          total: "",
          notes: ""
        }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {({ values, handleSubmit }) => {
          onData(values);

          return (
            <form onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <label htmlFor="date">Date</label>
                <Field
                  className={styles.input}
                  name="date"
                  id="date"
                  type="text"
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="client">Client</label>
                <Field
                  className={styles.input}
                  name="client"
                  id="client"
                  component="select"
                >
                  <option disabled value="">
                    --Select a client--
                  </option>
                  <option value="client-1">Inprov, LLC</option>
                  <option value="">Add new</option>
                </Field>
              </div>
              <FieldArray name="services">
                {arrayHelpers => (
                  <>
                    <label htmlFor="services">Services</label>
                    {values.services && values.services.length > 0 ? (
                      <>
                        {values.services.map((jobItem, index) => (
                          <ServiceInput
                            key={index}
                            id={`service-${index}`}
                            name={`services.${index}`}
                            onRemove={() => arrayHelpers.remove(index)}
                          />
                        ))}
                        <div className={styles.inputGroup}>
                          <button
                            className={styles.input}
                            onClick={() => arrayHelpers.push("")}
                            type="button"
                          >
                            + Add new work unit
                          </button>
                        </div>
                      </>
                    ) : (
                      <div className={styles.inputGroup}>
                        <button
                          onClick={() => arrayHelpers.push("")}
                          type="button"
                        >
                          + Add new work unit
                        </button>
                      </div>
                    )}
                  </>
                )}
              </FieldArray>
              <div className={styles.inputGroup}>
                <label htmlFor="total">Total</label>$
                <Field
                  className={styles.input}
                  type="text"
                  id="total"
                  name="total"
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="notes">Additional Notes</label>
                <Field
                  className={styles.input}
                  name="notes"
                  id="notes"
                  cols="30"
                  rows="10"
                  component="textarea"
                />
              </div>
              <div className={styles.inputGroup}>
                <button type="submit">Save</button>
              </div>
            </form>
          );
        }}
      </Formik>
    </>
  );
}

function ServiceInput({ id, name, onRemove }) {
  const classes = cx(styles.inputGroup, styles.jobItem);

  return (
    <div className={classes}>
      <Field className={styles.input} id={id} name={name} type="text" />
      <button onClick={onRemove} type="button">
        -
      </button>
    </div>
  );
}

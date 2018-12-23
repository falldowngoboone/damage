import React from "react";
import { Formik, Field, FieldArray } from "formik";

import styles from "./NewInvoicePane.module.scss";

export default function NewInvoicePane() {
  return (
    <>
      <h1>New Invoice</h1>
      <Formik
        initialValues={{ client: "", jobItems: [], total: "", notes: "" }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {({ values, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label htmlFor="client">Client</label>
              <Field name="client" id="client" component="select">
                <option disabled value="">
                  --Select a client--
                </option>
                <option value="client-1">Inprov, LLC</option>
                <option value="">Add new</option>
              </Field>
            </div>
            <FieldArray name="jobItems">
              {arrayHelpers =>
                values.jobItems && values.jobItems.length > 0 ? (
                  <>
                    {values.jobItems.map((jobItem, index) => (
                      <JobItemInput
                        key={index}
                        id={`job-item-${index}`}
                        name={`jobItems.${index}`}
                        onRemove={() => arrayHelpers.remove(index)}
                      />
                    ))}
                    <div className={styles.inputGroup}>
                      <button
                        onClick={() => arrayHelpers.push("")}
                        type="button"
                      >
                        + Add new work unit
                      </button>
                    </div>
                  </>
                ) : (
                  <div className={styles.inputGroup}>
                    <button onClick={() => arrayHelpers.push("")} type="button">
                      + Add new work unit
                    </button>
                  </div>
                )
              }
            </FieldArray>
            <div className={styles.inputGroup}>
              <label htmlFor="total">Total</label>$
              <Field type="text" id="total" name="total" />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="notes">Additional Notes</label>
              <Field
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
        )}
      </Formik>
    </>
  );
}

function JobItemInput({ id, name, onRemove }) {
  return (
    <div className={styles.inputGroup}>
      <Field id={id} name={name} type="text" />
      <button onClick={onRemove} type="button">
        -
      </button>
    </div>
  );
}

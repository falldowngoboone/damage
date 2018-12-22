import React from "react";

import styles from "./NewInvoicePane.module.scss";

export default function NewInvoicePane() {
  return (
    <>
      <h1>New Invoice</h1>
      <form action="#">
        <div className={styles.inputGroup}>
          <label htmlFor="client">Client</label>
          <select name="client" id="client">
            <option disabled value="" selected>
              --Select a client--
            </option>
            <option value="client-1">Inprov, LLC</option>
            <option value="">Add new</option>
          </select>
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="job-item-1">Work unit</label>
          <input type="text" id="job-item-1" name="job-item" />
        </div>
        <div className={styles.inputGroup}>
          <button>Add new work unit</button>
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="total">Total</label>$
          <input type="text" id="total" name="total" />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="notes">Additional Notes</label>
          <textarea name="notes" id="notes" cols="30" rows="10" />
        </div>
        <div className={styles.inputGroup}>
          <button type="submit">Save</button>
        </div>
      </form>
    </>
  );
}

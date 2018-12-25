import React from "react";
import Page from "./Page";

import styles from "./Preview.module.scss";

export default function Preview({ data = {} }) {
  return (
    <div className={styles.wrapper}>
      <Page>
        <div>
          <p>
            Ryan Boone
            <br />
            Web Design/Development
            <br />
            2424 Loreto Drive
            <br />
            Fort Worth, TX 76177
          </p>
        </div>
        <div>Date: {data.date}</div>
        <div>Invoice No: {data.invoiceId}</div>
        <div>Client: {data.client}</div>
        {data.services &&
          Boolean(data.services.length) && (
            <div>
              Services:
              <ul>
                {data.services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>
          )}
        <div>Total: ${data.total}</div>
        {Boolean(data.notes) && <div>Notes: {data.notes}</div>}
      </Page>
      <button className={styles.exportButton} />
    </div>
  );
}

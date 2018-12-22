import React from "react";
import NewInvoicePane from "./NewInvoicePane";
import { Router, Redirect } from "@reach/router";

import styles from "./WorkPane.module.scss";

export default function WorkPane({ pane }) {
  return (
    <div className={styles.wrapper}>
      <Router>
        <Redirect from="/" to={"/new-invoice"} />
        <NewInvoicePane path="/new-invoice" default />
        <Search path="/search" />
        <Clients path="/clients" />
      </Router>
    </div>
  );
}

function Search() {
  return (
    <>
      <h1>Search Invoices</h1>
      <input type="search" />
    </>
  );
}

function Clients() {
  return <h1>Clients</h1>;
}

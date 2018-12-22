import React, { useState } from "react";
import cx from "classnames";
import { Link } from "@reach/router";

import styles from "./ToolBar.module.scss";

export default function ToolBar() {
  const [activeTool, setActiveTool] = useState("newInvoice");
  const tools = ["newInvoice", "search", "clients"];

  const linkData = {
    newInvoice: {
      link: "/new-invoice",
      icon: "N"
    },
    search: {
      link: "/search",
      icon: "S"
    },
    clients: {
      link: "/clients",
      icon: "C"
    }
  };

  const buttons = tools.map(tool => {
    const page = linkData[tool];
    const buttonStyles = cx(styles.button, {
      [styles.active]: activeTool === tool
    });

    return (
      <Link
        to={page.link}
        key={page.link}
        onClick={() => {
          setActiveTool(tool);
        }}
        className={buttonStyles}
      >
        {page.icon}
      </Link>
    );
  });

  return <div className={styles.wrapper}>{buttons}</div>;
}

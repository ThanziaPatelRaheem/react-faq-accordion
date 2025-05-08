import React from "react";
import { AccordionContext } from "./AccordionMain";

export default function AccordionAns({ children }) {
  const { on } = React.useContext(AccordionContext);
  return (
    <>{on ? <div className="container-ans answer"> {children}</div> : null}</>
  );
}

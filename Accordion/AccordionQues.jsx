import React from "react";
import { FiArrowDownCircle } from "react-icons/fi";
import { AccordionContext } from "./AccordionMain";
import { FiArrowUpCircle } from "react-icons/fi";

export default function AccordionQues({ children }) {
  const { on, onToggle } = React.useContext(AccordionContext);

  return (
    <>
      <section className="ques-container">
        <div className={on ? "container-ques ques" : "container-ques"}>
          {children}
          {on ? (
            <FiArrowUpCircle onClick={onToggle} />
          ) : (
            <FiArrowDownCircle onClick={onToggle} className="chevron-icon" />
          )}
        </div>
      </section>
    </>
  );
}

import React from "react";

const AccordionContext = React.createContext();

export default function AccordionMain({ children }) {
  const [on, setOn] = React.useState(false);

  function onToggle() {
    setOn((prevVal) => !prevVal);
    console.log("toggled");
  }
  return (
    <>
      <AccordionContext.Provider value={{ on, onToggle }}>
        <div className="faq-main">{children}</div>
      </AccordionContext.Provider>
    </>
  );
}

export { AccordionContext };

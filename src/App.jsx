import AccordionAns from "../Accordion/AccordionAns";
import AccordionMain from "../Accordion/AccordionMain";
import AccordionQues from "../Accordion/AccordionQues";
import AccordionTitle from "../Accordion/AccordionTitle";
import { faqData } from "../Data/AccordionData";
import "./index.css";

console.log(faqData);
function App() {
  return (
    <>
      <AccordionTitle>
        React Essentials : Your Most Important And Frequently Asked Questions
      </AccordionTitle>
      {faqData.map((item) => (
        <div key={item.id}>
          <AccordionMain>
            <AccordionQues>
              <h3>{item.question}</h3>
            </AccordionQues>
            <AccordionAns>
              <p>{item.answer}</p>
            </AccordionAns>
          </AccordionMain>
        </div>
      ))}
    </>
  );
}

export default App;

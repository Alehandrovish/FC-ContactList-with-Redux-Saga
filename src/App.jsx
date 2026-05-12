import { useRef } from "react";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import "./reset.css";
import "./App.css";

function App() {
  const formikRef = useRef(null);
  return (
    <article className="content-wrapper">
      <h1>Contact list</h1>
      <section className="content-block">
        <ContactList formikRef={formikRef} />
        <ContactForm formikRef={formikRef} />
      </section>
    </article>
  );
}

export default App;

import React from "react";
import ContactForm from "./ContactForm";
import ContactHero from "./ContactHero";
import ContactIntro from "./ContactIntro";
export default function ContactMain() {
  return (
    <div>
      <ContactHero />
      <ContactIntro />
      <ContactForm />
    </div>
  );
}

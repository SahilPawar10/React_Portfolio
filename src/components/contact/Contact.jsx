import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import GitHubCalendar from "react-github-calendar";
import "./contact.css";
import { EMAIL } from "../mail/mail";

const messages = {
  sent: "Thanks, your message is on its way. I'll reply soon.",
  error: "That didn't send. Please email me directly at sahilpawar9764@gmail.com.",
};

const calendarTheme = {
  dark: ["#1a212c", "#5c4718", "#94701f", "#cc9529", "#ffb938"],
};

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("idle");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(EMAIL.service, EMAIL.template, form.current, EMAIL.publicKey)
      .then(
        () => {
          setStatus("sent");
          form.current.reset();
        },
        () => setStatus("error")
      );
  };

  return (
    <>
      <section id="contacts" className="section wrap contact">
        <div className="reveal">
          <p className="eyebrow">Contact</p>
          <h2 className="section-title">Let's build something that holds up.</h2>
          <ul className="contact-links">
            <li>
              <a href="mailto:sahilpawar9764@gmail.com">
                <i className="fa fa-envelope" aria-hidden="true"></i>
                sahilpawar9764@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+919764804327">
                <i className="fa fa-phone" aria-hidden="true"></i>
                +91 9764804327
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/sahil-pawar10/" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
                sahil-pawar10
              </a>
            </li>
            <li>
              <a href="https://github.com/SahilPawar10" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github" aria-hidden="true"></i>
                SahilPawar10
              </a>
            </li>
          </ul>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form reveal">
          <label>
            Name
            <input type="text" name="user_name" autoComplete="name" required />
          </label>
          <label>
            Email
            <input type="email" name="user_email" autoComplete="email" required />
          </label>
          <label className="full">
            Subject
            <input type="text" name="subject" required />
          </label>
          <label className="full">
            Message
            <textarea name="message" rows="5" required />
          </label>
          <div className="full contact-send">
            <button type="submit" className="btn" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Send message"}
            </button>
            <p role="status" className={status}>
              {messages[status]}
            </p>
          </div>
        </form>
      </section>

      <section className="wrap github" aria-label="GitHub contributions">
        <GitHubCalendar username="SahilPawar10" colorScheme="dark" theme={calendarTheme} />
      </section>

      <footer className="wrap footer">
        <p>Sahil Pawar</p>
        <p>
          When you visit, your approximate city and network are emailed to me. I
          don't receive your exact address or IP address.
        </p>
        <a href="https://www.instagram.com/sahil_pawar26/" target="_blank" rel="noreferrer">
          Instagram
        </a>
      </footer>
    </>
  );
}

export default Contact;

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

function Contact() {
  const form = useRef();
  const [loading, SetLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    SetLoading(true);

    emailjs
      .sendForm(
        "service_wrh592n",
        "template_pvmag3p",
        form.current,
        "UKVaAOhn3-2Alft8F"
      )
      .then(
        (result) => {
          console.log(result.text);
          SetLoading(false);
        },
        (error) => {
          console.log(error.text);
          SetLoading(false);
        }
      );
    e.target.reset();
  };

  return (
    <div id="contacts">
      <div className="contact-title">
        <h2>Contact Me</h2>
      </div>
      <div className="contact-details">
        <div className="contact-info">
          <div class="icon">
            <i class="fa fa-phone"></i>
          </div>
          <h4>Call Me on</h4>
          <p>+91 9764804327</p>
        </div>
        <div className="contact-info">
          <div class="icon">
            <i class="fa fa-map-marker-alt"></i>
          </div>
          <h4>Address</h4>
          <p>Koparkhairne,Navi Mumbai</p>
        </div>
        <div className="contact-info">
          <div class="icon">
            <i class="fa fa-envelope"></i>
          </div>
          <h4>Email</h4>
          <p>sahilpawar9764@gmail.com</p>
        </div>
        <div className="contact-info">
          <div class="icon">
            <i class="fa-brands fa-linkedin"></i>
          </div>
          <h4>Linkdin</h4>
          <p>
            {/* <a href="https://www.linkedin.com/in/sahil-pawar10/"> */}
            sahil-pawar10
            {/* </a> */}
          </p>
        </div>
      </div>
      <div className="contact-mail"></div>
      <div className="mail-heading">
        <h2>SEND ME AN EMAIL</h2>

        <p>I am very responsive to mail</p>
      </div>
      <div className="mail-form">
        <form ref={form} onSubmit={sendEmail}>
          <div className="row row1">
            <div class="form-item col-6 ">
              <div class="form-group">
                <input
                  type="text"
                  id="user_name"
                  class="form-control"
                  placeholder="Name"
                  name="user_name"
                  required
                />
              </div>
            </div>
            <div class="form-item col-6 ">
              <div class="form-group">
                <input
                  type="email"
                  id="user_email"
                  class="form-control"
                  placeholder="Email"
                  name="user_email"
                  required
                />
              </div>
            </div>
          </div>
          <div class="form-item col-12 ">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Subject"
                name="subject"
                required
              />
            </div>
          </div>
          <div class="form-item col-12 ">
            <div class="form-group">
              <textarea class="form-control" name="message" required />
            </div>
          </div>
          <div class="row">
            <div class="form-item col-12 padd-15">
              <button type="submit" class="btn">
                {loading ? "sending" : "Send Message"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;

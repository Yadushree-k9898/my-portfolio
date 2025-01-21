import React from "react";
import emailjs from "emailjs-com";
import styles from "./ContactStyles.module.css";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Send email using EmailJS
    emailjs
      .sendForm(
        "service_ar5fqov", // Your EmailJS service ID
        "template_2wvh48k", // Your EmailJS template ID
        e.target, // The form data
        "T1dTQuqK3UO22SCsk" // Your EmailJS user ID (Public key)
      )
      .then(
        (result) => {
          alert("Email sent successfully!");
        },
        (error) => {
          alert("Failed to send email. Please try again later.");
        }
      );
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;

import TelegramIcon from "../../assets/TelegramIcon";
import LinkedInIcon from "../../assets/LinkedInIcon";
import GitHubIcon from "../../assets/GitHubIcon";
import WhatsAppIcon from "../../assets/WhatsAppIcon";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Spline from "@splinetool/react-spline";
import { toast } from "react-toastify";

import "./ContactPage.css";

const ContactPage = () => {
  const form: React.RefObject<HTMLFormElement> = useRef(null);

  const customId = "custom-id-yes";

  const notifyOnSuccess = () => {
    toast.success("Message Sent!", {
      position: toast.POSITION.TOP_RIGHT,
      toastId: customId,
    });
  };

  const notifyOnError = () => {
    toast.error("Message Failed to Send!", {
      position: toast.POSITION.TOP_RIGHT,
      toastId: "error",
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceKey = import.meta.env.VITE_EMAILJS_SERVICE_KEY;
    const templateKey = import.meta.env.VITE_EMAILJS_TEMPLATE_KEY;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (form !== null && form.current !== null) {
      emailjs.sendForm(serviceKey, templateKey, form.current, publicKey).then(
        () => {
          notifyOnSuccess();
          if (form.current !== null) {
            form.current.reset();
          }
        },
        (error) => {
          notifyOnError();
          throw new Error(error.text);
        }
      );
    }
  };

  return (
    <footer className="contact-page" id="contacts">
      <div className="contact-page-details">
        <h5 className="contact-page-heading">CONTACT ME</h5>
        <h6 className="contact-page-email-title">Email</h6>
        <a
          className="email-address"
          title="Send email to mikhailkollen@gmail.com"
          href="mailto:mikhailkollen@gmail.com"
        >
          mikhailkollen@gmail.com
        </a>
        <div className="socials">
          <a
            href="https://t.me/MikhailKollen"
            title="Add on Telegram"
            target="_blank"
            className="socials-link"
          >
            <TelegramIcon></TelegramIcon>
          </a>
          <a
            href="https://www.linkedin.com/in/mikhail-kollen/"
            title="Add on LinkedIn"
            target="_blank"
            className="socials-link"
          >
            <LinkedInIcon></LinkedInIcon>
          </a>
          <a
            href="https://github.com/mikhailkollen"
            target="_blank"
            title="View GitHub"
            className="socials-link"
          >
            <GitHubIcon></GitHubIcon>
          </a>
          <a
            href="https://wa.me/995551175472"
            target="_blank"
            title="Contact via WhatsApp"
            className="socials-link"
          >
            <WhatsAppIcon></WhatsAppIcon>
          </a>
        </div>
        <p>Or fill in the contact form</p>
        <form onSubmit={handleSubmit} ref={form} className="contact-form">
          <input
            type="text"
            placeholder="Name"
            name="user_name"
            className="contact-page-input"
          ></input>
          <input
            type="email"
            placeholder="Email"
            name="user_email"
            className="contact-page-input"
          ></input>
          <textarea
            placeholder="Message"
            name="message"
            className="contact-page-input"
          ></textarea>
          <button
            type="submit"
            value="Send"
            className="contact-page-input contact-page-submit"
          >
            Send
          </button>
        </form>
      </div>
      <Spline
        style={{ width: "50%" }}
        className="contact-page-spline-container"
        scene="https://prod.spline.design/cHg4pwIllWPFYbgr/scene.splinecode"
      />
    </footer>
  );
};

export default ContactPage;

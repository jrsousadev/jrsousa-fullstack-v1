import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const params = {
      from_name: senderName,
      from_email: senderEmail,
      to_name: "Junior Sousa",
      subject,
      message,
    };

    try {
      emailjs.send(
        "service_w1w8ofr",
        "template_boe97ai",
        params,
        "w7AYOhE1mrlEgtp7k"
      );

      window.open(
        "https://api.whatsapp.com/send?phone=5579999648729&text=Ol%C3%A1,%20vim%20atrav%C3%A9s%20do%20seu%20site,%20gostaria%20de%20entrar%20em%20contato.",
        "_blank"
      );

      toast.success("Mensagem enviada com sucesso!");
    } catch (err) {
      toast.error("Houve um erro ao tentar enviar a mensagem");
    }
  };

  return (
    <>
      <form id="myForm" className="contactform" onSubmit={sendEmail}>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Seu nome"
                required
                onChange={(e) => setSenderName(e.target.value)}
              />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="form-group">
              <input
                type="email"
                name="user_email"
                placeholder="Seu e-mail"
                required
                onChange={(e) => setSenderEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="col-12 col-md-12">
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Seu assunto"
                required
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
          </div>

          <div className="col-12">
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Sua mensagem"
                required
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
          </div>

          <div className="col-12">
            <button type="submit" className="button" disabled={loading}>
              <span className="button-text">
                {loading ? "Enviando..." : "Enviar mensagem"}
              </span>
              <span className="button-icon fa fa-send"></span>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Contact;

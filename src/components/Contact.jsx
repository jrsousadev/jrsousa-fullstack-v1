import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_w1w8ofr",
        "service_w1w8ofr",
        form.current,
        "bxV0De4d8tH_-su2F1VDy"
      )
      .then(
        (result) => {
          console.log(result)
          toast.success("Mensagem enviada com sucesso!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          document.getElementById("myForm").reset();
        },
        (error) => {
          toast.error("Ops, mensagem não enviada!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      );
  };

  return (
    <>
      <form id="myForm" className="contactform" ref={form} onSubmit={sendEmail}>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <input type="text" name="name" placeholder="Seu nome" required />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="form-group">
              <input
                type="email"
                name="user_email"
                placeholder="Seu e-mail"
                required
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
              />
            </div>
          </div>

          <div className="col-12">
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Sua mensagem"
                required
              ></textarea>
            </div>
          </div>

          <div className="col-12">
            <button type="submit" className="button">
              <span className="button-text">Enviar mensagem</span>
              <span className="button-icon fa fa-send"></span>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Contact;

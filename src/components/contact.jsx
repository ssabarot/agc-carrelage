import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  from_name: "",
  reply_to: "",
  message: "",
};

export const Contact = (props) => {
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const userId = process.env.REACT_APP_EMAILJS_USER_ID;

  const [{ from_name, reply_to, message }, setState] = useState(initialState);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!from_name || !reply_to || !message) {
      setStatus("Tous les champs sont obligatoires.");
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, e.target, userId)
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message envoyé avec succès !");
          clearState();
        },
        (error) => {
          console.log(error.text);
          setStatus("Échec de l'envoi du message. Veuillez réessayer.");
        }
      );
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Contact</h2>
                <p>
                Pour toute demande de renseignements ou prise de rendez-vous, n'hésitez pas à me contacter, je vous répondrai dans les plus brefs délais.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="from_name"
                        className="form-control"
                        placeholder="Nom"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="reply_to"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success">{status && <p>{status}</p>}</div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Envoyer
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Informations</h3>
              <p>
                <span>
                <i className="fa fa-envelope-o"></i> Email
                </span>
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Adresse
                </span>{" "}
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id="footer" className="footer-style">
          <div className="container text-center">
            <p>
              &copy; 2024 Site web développé par <a href="https://www.linkedin.com/in/ssabarot" target="_blank" rel="noopener noreferrer">Sophie Sabarot</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
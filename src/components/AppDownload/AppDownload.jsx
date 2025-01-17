import React, { useState } from 'react';
import './AppDownload.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
// import { assets } from '../../assets/assets'

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name) {
      alert('Veuillez entrer votre nom.');
      return;
    }

    if (!email) {
      alert('Veuillez entrer votre email.');
      return;
    }

    if (!phone) {
      alert('Veuillez entrer votre numéro de téléphone.');
      return;
    }

    if (!message) {
      alert('Veuillez entrer votre message.');
      return;
    }

    alert("Votre formulaire a été soumis avec succès !");
  };

  return (
    <div className="container">
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
            Welcome! Feel free to get in touch with us.
            We're here to help and answer any questions you may have!
          </p>

          <div className="info">
            <div className="information">
              <p>123 Rue Mohammed V, Rabat, Maroc</p>
            </div>
            <div className="information">
              <p>BoussalemLekaibi@gamil.com</p>
            </div>
            <div className="information">
              <p>06 40 00 14 00</p>
            </div>
          </div>

          <div className="social-media">
            <p>Connect with us:</p>
            <div className="social-icons">
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit} id="contactForm">
            <h3 className="title">Contact us</h3>
            <div className="input-container">
              <input
                type="text"
                name="name"
                id="contactName"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input"
              />
            </div>
            <div className="input-container">
              <input
                type="email"
                name="email"
                id="contactEmail"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input"
              />
            </div>
            <div className="input-container">
              <input
                type="tel"
                name="phone"
                id="contactPhone"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="input"
              />
            </div>
            <div className="input-container textarea">
              <textarea
                name="message"
                id="contactMsg"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="input"
              />
            </div>
            <input type="submit" value="Send" className="bt-2" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

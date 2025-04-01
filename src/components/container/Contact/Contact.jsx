import React, { useState } from 'react';
import "./Contact.scss";
import { contacts } from '../../../Data';
import { socialIcons } from '../../../Data';
import { motion } from 'framer-motion';

const Contact = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSendClick = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <div className="container" id="contact">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title"
      >
        <span>get in touch</span>
        <h1>Contact Me</h1>
      </motion.div>

      <div className="contact_form">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-150, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className='contact_left_container'
        >
          <h3>Just Say Hi</h3>
          <p className='contact_text'>
            Whether you’re looking for a passionate full stack developer, want to collaborate on an exciting project, or just feel like having a tech chat — I’d love to hear from you. Feel free to reach out anytime!
          </p>

          {contacts.map(contact => (
            <div className='contact_left' key={contact.id}>
              <div className="icon">{contact.icon}</div>
              <p>{contact.infoText}</p>
            </div>
          ))}

<div className="social_icons">
  {socialIcons.map((social, index) => (
    <a
      key={index}
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className="social_icon_link"
    >
      {social.icon}
    </a>
  ))}
</div>

        </motion.div>

        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [150, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="contact_right"
        >
          <h3>Get In Touch</h3>
          <div className="row">
            <input type="text" placeholder='First Name' />
            <input type="text" placeholder='Last Name' />
          </div>
          <div className="row">
            <input type="text" placeholder='Phone' />
            <input type="email" placeholder='Email' />
          </div>
          <div className="row">
            <textarea placeholder='Message'></textarea>
          </div>

          {/* Success Message */}
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="success-message"
            >
              Message sent successfully! 🚀
            </motion.div>
          )}

          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="btn"
          >
            <button className="btn-send" onClick={handleSendClick}>Send</button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

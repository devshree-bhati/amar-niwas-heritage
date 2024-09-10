import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [statusMessage, setStatusMessage] = useState('')

  const sentEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2vk1jnd', 'template_86c06t9', e.target, {
      publicKey: 'G3rLFiM85KA9m2WSf',
    })
    .then(
      (result) => {
      console.log(result.test);
      setStatusMessage('Message sent successfully!');
    },
    (error) => {
      console.log(error.text);
      setStatusMessage('Failed to sent message. Please try again later.');
    });    

    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <div className='contact-container'>
      <h2>CONTACT FORM</h2>
      <div className="contact-box">
        <form onSubmit={sentEmail}>
          <ul className='contact-list'>
            <li className='contact-item'>
              <label htmlFor="name">NAME</label>
              <br/>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                }}
                placeholder="YOUR NAME"
                required
              />
            </li>
            <li className='contact-item'>
              <label htmlFor="email">EMAIL</label>
              <br/>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                placeholder="YOUR EMAIL ADDRESS"
                required
              />
            </li>
            <li className='contact-item' >
              <label htmlFor="phone">PHONE NO</label>
              <br/>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value)
                }}
                placeholder="YOUR PHONE"
                required
              />
            </li>
            <li className='contact-item' >
              <label htmlFor="message">MESSAGE</label>
              <br/>
              <textarea
                name="message"
                id="message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value)
                }}
                placeholder='YOUR MESSAGE'
                required
              ></textarea>
            </li>
            <li>
              <button type='submit'>Send</button>
            </li>
          </ul>
        </form>
        {statusMessage && <p>{statusMessage}</p>}
      </div>
    </div>
  );
};

export default Contact;

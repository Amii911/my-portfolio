import React, {useState} from 'react';
import {FaGithub, FaLinkedin, FaMediumM} from 'react-icons/fa'


function Contact() {
    const [fromName, setFromName] = useState('')
    const [fromEmail, setFromEmail] = useState('')
    const [message, setMessage] = useState('')
  
    const handleSubmit = (e) => {
      e.preventDefault()
  
      const serviceId = 'service_8w6ew6n'
      const templateId = 'template_xk7udic'
      const userId = 'QJqotmzAwpBZYS8Fe'
  
      emailjs
        .send(serviceId, templateId, {
          to_email: 'aminat.bla@gmail.com',
          message: message,
          from_name: fromName,
          from_email: fromEmail,
        }, userId)
        .then((response) => {
          console.log('Email sent successfully!', response)
          setFromName('')
          setFromEmail('')
          setMessage('')
        })
        .catch((error) => {
          console.error('Error sending email:', error)
        })
    }
  
    return (
      <div className="email-form-container">
        {/* <div className="email-form">
          <form onSubmit={handleSubmit}>
            <label>
              Your Name:
              <input
                type="text"
                value={fromName}
                onChange={(e) => setFromName(e.target.value)}
                required
              />
            </label>
            <label>
              Your Email:
              <input
                type="email"
                value={fromEmail}
                onChange={(e) => setFromEmail(e.target.value)}
                required
              />
            </label>
            <label>
              Message:
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </label>
            <button type="submit">Send Email</button>
          </form>
        </div> */}
      </div>
    )
}

export default Contact
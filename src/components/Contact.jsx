import React, {useState} from 'react';
import emailjs from '@emailjs/browser';

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
      <div name='contact' className='w-full h-screen text-[#1f2435] bg-[#f1ecea] flex justify-center items-center p-4'>
          <form onSubmit={handleSubmit} className='flex flex-col max-w-[600px] w-full'>
              <div className='pb-8'>
                  <p className='text-4xl font-bold inline border-b-4 text-[#1f2435]'>Contact</p>
                  <p className='text-[#1f2435] py-4'>Submit the form below or email me - adebayo.aminat@gmail.com</p>
              </div>
              <input className='p-2' type="text" placeholder='Name' name='name' value={fromName} onChange={(e) => setFromName(e.target.value)}/>
              <input className='my-4 p-2' type="email" placeholder='Email' name='email' value={fromEmail} onChange={(e)=> setFromEmail(e.target.value)} />
              <textarea className='p-2' name="message" rows="10" placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
              <button className='text-[#1f2435] border-2 hover:bg-[#8892b0] hover:border-[#8892b0] px-4 py-3 my-8 mx-auto flex items-center font-bold'>Send</button>
          </form>
      </div>
    )
  }

export default Contact
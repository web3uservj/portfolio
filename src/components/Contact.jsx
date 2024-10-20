import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useSpring, animated } from '@react-spring/web';
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaCopy } from 'react-icons/fa'; // Import icons
import './Contact.css'; // Import the CSS file

export default function Contact() {
    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('xxxxxxxxxxxxx', 'xxxxxxxxxxx', e.target, 'xxxxxxxxxxxxx')
            .then((result) => {
                console.log(result.text);
                setFormData({
                    from_name: '',
                    from_email: '',
                    message: ''
                });
                alert('Message sent successfully!');
            }, (error) => {
                console.log(error.text);
                alert('Failed to send message. Please try again later.');
            });
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        alert('Copied to clipboard!');
    };

    const fadeInProps = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1000 } });
    const slideUpProps = useSpring({ transform: 'translateY(0)' , from: { transform: 'translateY(20px)' }, config: { tension: 120, friction: 14 } });

    return (
        <section id='contact' className='contact-section'>
            <div className='contact-container'>
                <animated.h1 style={fadeInProps} className='contact-title'>Contact Me</animated.h1>
                <animated.p style={fadeInProps} className='contact-description'>Feel free to reach out if you have any questions or inquiries.</animated.p>
                <animated.form onSubmit={handleSubmit} className='contact-form' style={slideUpProps}>
                    <div className='form-group'>
                        <label htmlFor='from_name' className='form-label'>Name:</label>
                        <input type='text' id='from_name' name='from_name' value={formData.from_name} onChange={handleChange} className='form-input' required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='from_email' className='form-label'>Email:</label>
                        <input type='email' id='from_email' name='from_email' value={formData.from_email} onChange={handleChange} className='form-input' required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='message' className='form-label'>Message:</label>
                        <textarea id='message' name='message' value={formData.message} onChange={handleChange} rows='5' className='form-input' required></textarea>
                    </div>
                    <div className='form-group form-submit'>
                        <button type='submit' className='submit-button'>Send</button>
                    </div>
                </animated.form>
                <animated.div style={fadeInProps} className='contact-info'>
                    <p className='contact-detail'>
                        <FaEnvelope className='contact-icon' /> 
                        <span className='contact-label'>Email:</span> 
                        <a href={`mailto:vj17092002@gmail.com`}>vj17092002@gmail.com</a>
                        <FaCopy className='copy-icon' onClick={() => copyToClipboard('vj17092002@gmail.com')} />
                    </p>
                    <p className='contact-detail'>
                        <FaPhoneAlt className='contact-icon' /> 
                        <span className='contact-label'>Phone:</span> 
                        +91 6379888062
                        <FaCopy className='copy-icon' onClick={() => copyToClipboard('+91 6379888062')} />
                    </p>
                    <p className='contact-detail'>
                        <FaLinkedin className='contact-icon' /> 
                        <span className='contact-label'>LinkedIn:</span> 
                        <a href='https://in.linkedin.com/in/vjmaths' target='_blank' rel='noopener noreferrer'>Vijay M</a>
                        <FaCopy className='copy-icon' onClick={() => copyToClipboard('https://in.linkedin.com/in/vjmaths')} />
                    </p>
                </animated.div>
            </div>
        </section>
    );
}

import './contact.css'

import {
    FaEnvelopeOpen,
    FaPhoneSquareAlt,
    FaFacebookF,
    FaTwitter,
    FaYoutube,
    FaDribbble,
} from 'react-icons/fa';

import { FiSend } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { toast } from 'react-toastify';

function Contact() {
    const [loading, setLoading] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true)
        emailjs.sendForm('service_nwpx9mg', 'template_k1afpab', form.current, '3rBCa9p3OP_zqFeJ1')
            .then((result) => {
                if (result) {
                    toast.success('Send Mail Successful!')
                }
            }, (error) => {
                console.log(error.text);
            });
        setLoading(false);
    };
    return (
        <section className='contact section'>
            <h2 className='section__title'>Get In <span>Touch</span></h2>

            <div className='contact__container container grid'>
                <div className='contact__data'>
                    <h3 className='contact__title'>Dont by Shy!</h3>
                    <p className='contact__description'>
                        Feel free to get in touch with me. I am always open to discussing
                        new project, creative ideas or opportunities to be part of your visions.
                    </p>
                    <div className='contact__info'>
                        <div className='info__item'>
                            <FaEnvelopeOpen className='info__icon' />
                            <div>
                                <span className='info__title'>Mail Me</span>
                                <h4 className='info__desc'>buithinh200102@gmail.com</h4>
                            </div>
                        </div>

                        <div className='info__item'>
                            <FaPhoneSquareAlt className='info__icon' />
                            <div>
                                <span className='info__title'>Call Me</span>
                                <h4 className='info__desc'>+84392899387</h4>
                            </div>
                        </div>
                    </div>

                    <div className='contact__socials'>
                        <a href="" className='contact__socials-link'>
                            <FaFacebookF />
                        </a>
                        <a href="" className='contact__socials-link'>
                            <FaTwitter />
                        </a><a href="" className='contact__socials-link'>
                            <FaYoutube />
                        </a><a href="" className='contact__socials-link'>
                            <FaDribbble />
                        </a>
                    </div>
                </div>

                <form className='contact__form' ref={form} >
                    <div className='form__input-group'>
                        <div className='form__input-div'>
                            <input
                                type="text"
                                placeholder='Your Name'
                                className='form__control'
                                name='name'
                            />
                        </div>

                        <div className='form__input-div'>
                            <input
                                type="email"
                                placeholder='Your Email'
                                className='form__control'
                                name='email'
                            />

                        </div>

                        <div className='form__input-div'>
                            <input
                                type="text"
                                placeholder='Subject'
                                className='form__control'
                                name='subject'
                            />
                        </div>
                    </div>

                    <textarea placeholder='Your Message' className='form__control textarea' name='message'></textarea>
                    <button type='button' className='button button__send-mail' onClick={sendEmail}>
                        {loading && <i class="fa-solid fa-spinner fa-spin"></i>}
                        &nbsp; Send Message
                        <span className='button__icon contact__button-icon'><FiSend /></span>
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
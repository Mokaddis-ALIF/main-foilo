import React, { useRef, useState } from 'react';
import Separator from '../../commons/seperator/seperator';
import './Contact.css';
import Phone from '../../../ss/contact/phone.png';
import Email from '../../../ss/contact/email.png';
import Address from '../../../ss/contact/address.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
	const formRef = useRef();
	const [done, setDone] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				'service_qdzqpcw',
				'template_ngendeg',
				formRef.current,
				'user_PcQPKmv0ZMFHGBbhXv2bt'
			)
			.then(
				(result) => {
					console.log(result.text);
					setDone(true);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<div className="c">
			<Separator />
			<div className="c-wrapper">
				<div className="c-left">
					<label className="section-title">Let's discuss your project</label>
					<div className="c-info">
						<div className="c-info-item">
							<img src={Phone} alt="" className="c-icon" />
							+8801673913970
						</div>
						<div className="c-info-item">
							<img className="c-icon" src={Email} alt="" />
							mokaddis.alif@gmail.com
						</div>
						<div className="c-info-item">
							<img className="c-icon" src={Address} alt="" />
							Chittagong,BD.
						</div>
					</div>
				</div>
				<div className="c-right">
					<form ref={formRef} onSubmit={handleSubmit}>
						<input type="text" placeholder="Name" name="user_name" />
						<input type="text" placeholder="Subject" name="user_subject" />
						<input type="text" placeholder="Email" name="user_email" />
						<textarea rows="5" placeholder="Message" name="message" />
						<button>Submit</button>
						{done && 'Thank you...'}
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;

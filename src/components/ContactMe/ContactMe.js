import React from 'react';
import './ContactMe.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';

const ContactMe = () => {

	React.useEffect(()=>{
	Aos.init({duration: 3000, once:true});
	}, []);

	return (
		<section className='contact'>
			<div className='wrapper'> 
				<h2 data-aos='zoom-in-up'>CONTACT</h2>
				<p data-aos='fade-up' data-aos-anchor-placement='top-bottom'>Want to work with me? That's great!</p>
				<a href='mailto:elenagiura94@gmail.com' data-aos='fade-up' data-aos-anchor-placement='top-bottom'><span>Let's Talk</span><p></p></a>
			</div>
		</section>
	)
}

export default ContactMe;
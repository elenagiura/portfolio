import React from 'react';
import './AboutMe.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';
import cvImage from '../../images/CV-photo.jpg';
import cv from '../../elena-milosevic.pdf';

const AboutMe = () => {

	React.useEffect(()=>{
		Aos.init({duration: 3000, once:true});
	}, []);

	const openCV = (e) => {
		e.preventDefault();
		window.open(cv);
	}

	return (
		<section className='about-me'>
			<div className='wrapper'> 
				<h2 data-aos='zoom-in-up'>ABOUT ME</h2>
				<img src={cvImage} alt='Elena Milosevic' data-aos='zoom-in-left'/>
				<section data-aos='zoom-in-right'>
					<p>Hello world! My name is Elena Milosevic and I enjoy creating things that live on the internet. <br/>
					I graduated on the Faculty of Mechanical Engineering at the University of Belgrade,
					and achived the title of M.Sc. in Mechanical Engineering. 
					I started learning web design on my own out of curiosity and as I really liked it,
					I decided to change the direction of my career towards front-end development,
					as it suits me better and better expresses my creativity. <br/>
					My Moto is quote from Mahatma Gandhi who briefly explained all that is needed for happiness:  &nbsp;
					<q>Be the change that you wish to see in the world.</q>
					<br/><br/>
					</p>
					<p>My current stack of languages/technologies are:</p>
					<ul>
						<li>React.Js</li>
						<li>JavaScript</li>
						<li>TypeScript</li>
						<li>HTML</li>
						<li>CSS</li>
						<li>SASS</li>
						<li>Git</li>
						<li>GitHub</li>
						<li>NPM</li>
						<li>VS Code</li>
					</ul>
					<a onClick={(e)=>openCV(e)} target='_blank' id='cv' href='#'><span>Curriculum Vitae</span><span></span></a>
				</section>
			</div>
		</section>
	)
}

export default AboutMe;
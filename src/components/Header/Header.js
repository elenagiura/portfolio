import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Header.scss';

const Header = () => {

	React.useEffect(()=>{
		Aos.init({duration: 3000});
	}, []);

	const goToProjects = (e) => {
		e.preventDefault();
		window.scrollTo({
		  top: document.querySelector('section.projects').offsetTop,
		  behavior: 'smooth'
		});
	}

	return (
		<header id='header' style={{height: 100+'vh'}}>
			<div className='wrapper' >
				<h1 data-aos='fade-right'>I transform creativity into the code</h1>
				<h3 data-aos='fade-right'>I'm Elena Milosevic - Front-end Developer</h3>
				<a href='#projects' onClick={(e)=>goToProjects(e)} data-aos='fade-right'><span>Look at my work</span><p></p></a>
			</div>
		</header>
	)
}

export default Header;
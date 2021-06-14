import React from 'react';
import './Projects.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';
import uuid from 'react-uuid';
import {datas} from '../../datas';

const Projects = () => {
	React.useEffect(()=>{
		Aos.init({duration: 3000, once:true});
	}, []);

	return (
		<section className='projects' id='projects'>
			<div className='wrapper'> 
				<h2 data-aos='zoom-in-up'>PROJECTS</h2>
				<ul>
					{datas.map(project => (
						<li key={uuid()} className='clearfix'>
							<article data-aos='fade-right'>
								<h3>{project.title}</h3>
								<p>{project.description}</p>
								<a href={project.live} target='#'>See Live</a>
								<a href={project.source} target='#'>Source Code</a>
							</article>
							<div data-aos='fade-left'>
								<img src={project.image} alt={project.title}/>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}

export default Projects;
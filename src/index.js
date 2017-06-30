import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import About from './About';
import FeaturedWork from './FeaturedWork';
import Project from './Project';
import Footer from './Footer';
import registerServiceWorker from './registerServiceWorker';


class Portfolio extends React.Component {
	constructor(){
		super();
		this.state={

		}
	}
	render(){
		const aboutMe="Hi, I'm Wenping(Stefanie). I am a front end web developer based in Brisbane."
		return (
			<Header image="#" 
			        name="Wenping Wang"
			        email="wenping.wangyu@yahoo.com" />
	        <About aboutMe={aboutMe} />
	        <FeaturedWork>
		        <Project name="Roguelike Dungeon Crawler"
				        image="#"
				        link="#"
				        detail="HTML5, CSS3, JAVASCRIPT, REACT" />
				<Project name="Game of Life"
				        image="#"
				        link="#"
				        detail="HTML5, CSS3, JAVASCRIPT, REACT" />
		        <Project name="Recipe Box"
				        image="#"
				        link="#"
				        detail="HTML5, CSS3, JAVASCRIPT, REACT, BOOSTRAP" />
		        <Project name="Simon Game"
				        image="#"
				        link="#"
				        detail="HTML5, CSS3, JAVASCRIPT, jQuery" />

	        </FeaturedWork>
	        <Footer github="#"
	                codePen="#"
	                linkedIn="#" />
			)
	}
}
ReactDOM.render(<Portfolio />, document.getElementById('root'));
registerServiceWorker();

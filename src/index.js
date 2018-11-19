import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Link extends React.Component {
	render(){
		return (
			<a
				href={this.props.href} 
				target="_blank"
				rel="noopener noreferrer"
			>
				{this.props.label}
			</a>
		);
	}
}

class Section extends React.Component {
	renderLink(link) {
		const links = [];
		let i = 0;
			for(const key in link){
				links.push(<Link href={link[key]} label={key} key={i} />);
				i++;
			}
		return links;
	}

	render() {
		return (
			<section id={this.props.value}>
				<div className="title">{this.props.value}</div>
				<div className="content">{this.renderLink(this.props.links)}</div>
			</section>
		);
	}
}
class Main extends React.Component {
	renderSection(content){
		return content.map((section, index) => <Section value={section.title} links={section.links} others={section.others} key={index}/>);
	}

	render() {
		return (
			<main>
				{this.renderSection(this.props.content)}
			</main>
		);
	}
}

const sections = [
	{
		title: "Monitoring",
		links: {
			"Plan Monitoring (August 2018)": "https://docs.google.com/spreadsheets/d/1f4CM19eSHN_OdDZY39z4HAi1b_Ib4sfIP3aVderSdTM/edit#gid=925288811",
			"":"",
		},
		others: ""
	}
]

ReactDOM.render(<Main content={sections} />, document.getElementById('root'));

// const content = (
// 	<React.Fragment>
// 		<div className="layer2">
// 			<div className="background"></div>
// 		</div>
// 		<div className="layer1">
// 			<div className="filter"></div>
// 		</div>
// 		<div className="layer0">
// 			<main>
// 				<div id="home" className="blank"></div>
// 				<section id="monitoring">
// 					<div className="title">Monitoring</div>
// 					<div className="content">
// 						<a href="" target="_blank" rel="noopener noreferrer"></a>
// 						<a href="" target="_blank" rel="noopener noreferrer"></a>
// 						<a href="https://docs.google.com/spreadsheets/d/1quD2imwF8rqBQUzq6-m8lrqKBnPz1WRk5uzez7mwZFw/edit#gid=472071419" target="_blank" rel="noopener noreferrer">Plan Monitoring v2.1 (October)</a>
// 						<a href="https://docs.google.com/spreadsheets/d/1cdXoLbqUIzCjVEjcnhuEuX5EHR5ZwH6rJDFXvTGOKU4/edit#gid=472071419" target="_blank" rel="noopener noreferrer">Plan Monitoring v2.2 (November)</a>
// 					</div>
// 				</section>
// 				<section id="manual">
// 					<div className="title">Manual</div>
// 					<div className="content">
// 						<a href="../misc/pdf/checklist10.01.2018.pdf" target="_blank" rel="noopener noreferrer">Check List</a>
// 						<a href="../misc/pdf/manual_for_checking10.01.2018.pdf" target="_blank" rel="noopener noreferrer">Checking Manual</a>
// 						<a href="../misc/pdf/dp.pdf" target="_blank" rel="noopener noreferrer">Basic Detailing</a>
// 						<a href="../misc/pdf/ep.pdf" target="_blank" rel="noopener noreferrer">Basic Electrical Plan</a>
// 						<a href="../misc/pdf/dpep10.02.2018.pdf" target="_blank" rel="noopener noreferrer">DP & EP (Updated)</a>
// 						<a href="../misc/pdf/sp.pdf" target="_blank" rel="noopener noreferrer">Storage Plan (Actie)</a>
// 					</div>
// 				</section>
// 				<section id="report">
// 					<div className="title">Report</div>
// 					<div className="content">
// 						<a href="https://docs.google.com/spreadsheets/d/1S0FXjVacFKHxqwcVHWoMKkSI9NckSquD0DjNQzzNNMg/edit#gid=1015423851" target="_blank" rel="noopener noreferrer">Monthly Comparison</a>
// 						<a href="https://docs.google.com/spreadsheets/d/1ZkU9-HDHKubtWJlStzilFwa-C-RDmr4-1sgm0CpCbnk/edit#gid=1537691498" target="_blank" rel="noopener noreferrer">Productivity & Quality Report</a>
// 					</div>
// 				</section>
// 				<section id="kakunin">
// 					<div className="title">Kakunin Mistake Monitoring</div>
// 					<div className="content">
// 						<a href="https://goo.gl/forms/X8lNbWjhq7LFVmnt1" target="_blank" rel="noopener noreferrer">Mistake Encoding</a>
// 						<a href="https://docs.google.com/spreadsheets/d/1Gd-GJ7ZHVfvRf3xZiz5K9UDrCUad3Zv_oeb9pKNIDgA/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Mistake Lists</a>
// 					</div>
// 				</section>
// 				<section id="additional">
// 					<div className="title">Additional Links</div>
// 					<div className="content">
// 						<a href="https://docs.google.com/spreadsheets/d/1hD1sYnf_btSktRM8SiYJStvzM5hsmdZHoROt4tSWCOU/edit?ts=584e3927#gid=464436514" target="_blank" rel="noopener noreferrer">Spread Sheet (Project)</a>
// 						<a href="https://docs.google.com/spreadsheets/d/1jKAao-2QcKtGUz5ZBXxoAusP0Ulcsj9hn1R91EBcPtk/edit#gid=1563213429" target="_blank" rel="noopener noreferrer">Spread Sheet (JW Convertion)</a>
// 						<a href="https://mail.google.com/mail/u/1/#inbox" target="_blank" rel="noopener noreferrer">Gmail</a>
// 						<a href="https://translate.google.com/" target="_blank" rel="noopener noreferrer">Google Translate</a>
// 						<a href="https://www.databank-solution.net/" target="_blank" rel="noopener noreferrer">Data Bank</a>
// 						<a href="http://firestorage.jp/" target="_blank" rel="noopener noreferrer">Fire Storage</a>
// 					</div>
// 					<div className="note">*Your suggested links and shortcuts will be here...</div>
// 				</section>
// 				<div className="blank"></div>
// 			</main>
// 			<div className="header">
// 				<div className="title">Training Department</div>
// 				<div className="sub-title">Projects and Links</div>
// 				<div className="button">
// 					<input type="button" id="start" data-target="monitoring" value="Get Started" />
// 				</div>
// 			</div>
// 			<nav className="nav">
// 				<div data-target="home">Home</div>
// 				<div data-target="monitoring">Monitoring</div>
// 				<div data-target="manual">Manual</div>
// 				<div data-target="report">Report</div>
// 				<div data-target="kakunin">Kakunin</div>
// 				<div data-target="additional">Additional</div>
// 			</nav>
// 			<div className="post-it">
// 				<div className="tape tape1"></div>
// 				<div className="tape tape2"></div>
// 				<p></p>
// 				<p>Updates as of : <strong>Nov 13, 2018</strong></p>
// 				<p></p>
// 				<p>Additional Link:</p>
// 				<p></p>
// 				<p>Kakunin Mistake Monitoring</p>
// 				<p></p>
// 				<p>Click <span className="note-link" data-target="kakunin">here</span> to view.</p>
// 				<p></p>
// 				<p></p>
// 				<p></p>
// 				<p></p>
// 				<p></p>
// 				<p></p>
// 				<p></p>
// 			</div>
// 		</div>
// 	</React.Fragment>
// )

// ReactDOM.render(content, document.getElementById('root'));

// const background = document.querySelector('.background');
// const nav = document.querySelector('.nav')
// const navY = nav.offsetTop;
// const main = document.querySelector('main');
// const navKey = document.querySelectorAll('[data-target]');

// // change image during scrolls
// function setImage(){
// 	const scrolled = window.scrollY;
// 	const height = background.offsetHeight;
// 	let image;

// 	scrolled >= navY ? nav.classList.add('fixed') : nav.classList.remove('fixed');
// 	//scrolled > height ? image = 'url(\'../image/cad1.jpg\')' : image = 'url(\'../image/cad3.jpg\')';
// 	// document.documentElement.style.setProperty('--image', image);
// }

// function navigate(){
// 	const target = document.querySelector(`#${this.dataset.target}`);
// 	window.scrollTo(0, target.offsetTop - nav.offsetHeight);
// }

// document.addEventListener('scroll', setImage);
// navKey.forEach(key => {
// 	key.addEventListener('click', navigate);
// })

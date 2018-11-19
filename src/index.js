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
				{this.props.others}
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
			"Mistake Monitoring (August 2018)":"https://docs.google.com/spreadsheets/d/10ZE2AkGJCynve6tog7xT8NkGqFI-ZF36TbaA8EO89yw/edit#gid=0",
			"Plan Monitoring v2.0":"https://docs.google.com/spreadsheets/d/1EeV-O9JyWU_l0LW5g0onSShgqolUA6ecxbkS7GvDcyw/edit#gid=853151862",
			"Plan Monitoring v2.1":"https://docs.google.com/spreadsheets/d/1quD2imwF8rqBQUzq6-m8lrqKBnPz1WRk5uzez7mwZFw/edit#gid=472071419",
			"Plan Monitoring v2.2 (November)":"https://docs.google.com/spreadsheets/d/1cdXoLbqUIzCjVEjcnhuEuX5EHR5ZwH6rJDFXvTGOKU4/edit#gid=472071419",
		},
		others: ""
	},
	{
		title: "Manual",
		links: {
			"Check List":"../misc/pdf/checklist10.01.2018.pdf",
			"Checking Manual":"../misc/pdf/manual_for_checking10.01.2018.pdf",
			"Basic Detailing":"../misc/pdf/dp.pdf",
			"Basic Electrical Plan":"../misc/pdf/ep.pdf",
			"DP & EP (Updated)":"../misc/pdf/dpep10.02.2018.pdf",
			"Storage Plan (Actie)":"../misc/pdf/sp.pdf",
		},
		others: ""
	},
	{
		title: "Report",
		links: {
			"Monthly Comparison":"https://docs.google.com/spreadsheets/d/1S0FXjVacFKHxqwcVHWoMKkSI9NckSquD0DjNQzzNNMg/edit#gid=1015423851",
			"Productivity & Quality Report":"https://docs.google.com/spreadsheets/d/1ZkU9-HDHKubtWJlStzilFwa-C-RDmr4-1sgm0CpCbnk/edit#gid=1537691498",
		},
		others: ""
	},
		{
		title: "Kakunin Monitoring",
		links: {
			"Mistake Encoding":"https://goo.gl/forms/X8lNbWjhq7LFVmnt1",
			"Mistake Lists":"https://docs.google.com/spreadsheets/d/1Gd-GJ7ZHVfvRf3xZiz5K9UDrCUad3Zv_oeb9pKNIDgA/edit?usp=sharing",
		},
		others: ""
	},
		{
		title: "Additional Links",
		links: {
			"Spread Sheet (Project)":"https://docs.google.com/spreadsheets/d/1hD1sYnf_btSktRM8SiYJStvzM5hsmdZHoROt4tSWCOU/edit?ts=584e3927#gid=464436514",
			"Spread Sheet (JW Convertion)":"https://docs.google.com/spreadsheets/d/1jKAao-2QcKtGUz5ZBXxoAusP0Ulcsj9hn1R91EBcPtk/edit#gid=1563213429",
			"Gmail":"https://mail.google.com/mail/u/1/#inbox",
			"Google Translate":"https://translate.google.com/",
			"Data Bank":"https://www.databank-solution.net/",
			"Fire Storage":"http://firestorage.jp/",
		},
		others: <div className="note">*Your suggested links and shortcuts will be here...</div>
	}
]

ReactDOM.render(<Main content={sections} />, document.getElementById('root'));

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
